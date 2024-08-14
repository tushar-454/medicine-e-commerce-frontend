import axios from 'axios';

// give me upload image function i upload image to imagebb
export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBBSEC}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (response.data.success) {
      return response.data.data.display_url;
    }
  } catch (error) {
    throw new Error('Failed to upload image');
  }
};
