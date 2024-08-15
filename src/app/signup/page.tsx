'use client';
import axios from '@/utils/axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type SignupInitType = {
  name: string;
  email: string;
  password: string;
};

const signupInit: SignupInitType = {
  name: '',
  email: '',
  password: '',
};

const Signup: React.FC = () => {
  const [signup, setSignup] = useState({ ...signupInit });
  const [isSendCode, setIsSendCode] = useState(false);
  const [code, setCode] = useState<null | number>(null);
  const [photo, setPhoto] = useState(null);
  const [photoDisplay, setPhotoDisplay] = useState('');
  const [timer, setTimer] = useState(59);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isVerify, setIsVerify] = useState(false);
  const router = useRouter();

  // handle input change
  const handleUserSignupChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setSignup({ ...signup, [name]: value });
  };

  // handle email send code
  const handleSendCode = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!signup.email || !emailRegex.test(signup.email)) {
      return toast.error('Please enter valid gmail address');
    }

    try {
      const res = await axios.post('/email/send-verification-code', {
        email: signup.email,
      });

      if (res.data.status === 200) {
        toast.success('Verification code sent to your email');
        setIsSendCode(true);
        const timerId = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
        setIntervalId(timerId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle email verify
  const handleVerify = async () => {
    try {
      const res = await axios.post('/email/verify-code', {
        email: signup.email,
        code,
      });
      if (res.data.status === 200) {
        toast.success('Email verified');
        setIsVerify(true);
        clearInterval(intervalId as NodeJS.Timeout);
      }
      if (res.data.status === 400) {
        toast.error('Time out');
      }
    } catch (error) {
      toast.error('Invalid code');
      console.log(error);
    }
  };

  // handle photo upload
  const handlePhotoUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) setPhotoDisplay(file.name);
    try {
      const formData = new FormData();
      formData.append('photo', file as Blob);
      const res = await axios.post('/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.data.status === 200) {
        setPhoto(res.data.file);
        toast.success('Photo uploaded');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle user signup
  const handleUserSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password } = signup;
    if (!name || !email || !password || !photo) {
      toast.error('Please fill all fields');
      return;
    } else if (!isVerify) {
      toast.error('Verify your email');
      return;
    }
    try {
      const res = await axios.post('/user/create', {
        name,
        email,
        password,
        photo,
      });
      if (res.data.status === 201) {
        toast.success('Signup success please login');
        setSignup({ ...signupInit });
        router.replace('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (timer <= 0 && intervalId) {
      clearInterval(intervalId);
      setIsSendCode(false);
      setIsVerify(false);
      setCode(null);
      setTimer(59);
    }
  }, [timer, intervalId]);
  return (
    <div className='flex h-screen justify-center bg-gray-100'>
      <form
        className='mt-32 h-fit w-96 rounded-lg bg-white p-6 shadow-md'
        onSubmit={handleUserSignup}
      >
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-800'>
          Signup
        </h2>

        <div className='mb-4'>
          <label htmlFor='name' className='label'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='input'
            placeholder='Enter your name'
            value={signup.name}
            onChange={handleUserSignupChange}
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <div className='flex'>
            <input
              type='email'
              id='email'
              name='email'
              className='input rounded-r-none'
              placeholder='email'
              value={signup.email}
              onChange={handleUserSignupChange}
            />
            <button
              type='button'
              onClick={handleSendCode}
              disabled={isSendCode}
              className='btnBlack whitespace-nowrap rounded-l-none'
            >
              {isSendCode ? `00:${timer}` : 'Send code'}
            </button>
          </div>
        </div>

        <div className={`mb-4 ${isSendCode ? 'block' : 'hidden'}`}>
          <label htmlFor='code' className='label'>
            Verification Code
          </label>
          <div className='flex'>
            <input
              type='number'
              id='code'
              name='code'
              className='input rounded-r-none'
              placeholder='verification code'
              value={code || ''}
              onChange={(e) => setCode(+e.target.value)}
            />
            <button
              onClick={handleVerify}
              type='button'
              className='btnBlack rounded-l-none'
              disabled={isVerify}
            >
              {isVerify ? 'Verifed' : 'Verify'}
            </button>
          </div>
        </div>

        <div className='mb-6'>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='input'
            placeholder='enter your password'
            value={signup.password}
            onChange={handleUserSignupChange}
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='photo'
            className='label cursor-pointer rounded-lg border p-5 text-center'
          >
            {photoDisplay ? `${photoDisplay} - added` : 'Uplaod your photo'}
          </label>
          <input
            type='file'
            id='photo'
            className='input'
            onChange={handlePhotoUpload}
            hidden
          />
        </div>

        <button type='submit' className='atc-button block w-full'>
          Signup
        </button>
        <p className='mt-4'>
          You have an account?{' '}
          <Link href={'/login'} className='text-surfie-green-600'>
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
