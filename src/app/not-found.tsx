import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_P9gLPYPerXMwgOV5NqHoa44F7pNegKUaw&s'
        alt='404'
        width={500}
        height={500}
        className='mt-20'
      />
      <Link href='/' className='atc-button'>
        Go Home
      </Link>
    </div>
  );
};

export default page;
