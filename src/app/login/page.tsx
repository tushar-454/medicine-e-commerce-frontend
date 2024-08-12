'use client';

import { createToken } from '@/api/token';
import { userLogin } from '@/api/user';
import { AppDispatch } from '@/store/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const loginInit: { email: string; password: string } = {
  email: '',
  password: '',
};
const Login = () => {
  const [login, setLogin] = useState({ ...loginInit });
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // handle user login
  const handleUserLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = login;
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }
    try {
      const res = await dispatch(userLogin({ email, password }));
      if (res.payload?.status === 200) {
        toast.success('Login successful');
        router.replace('/');
        const response = await dispatch(
          createToken({
            email: res.payload.user.email,
            role: res.payload.user.role,
          }),
        );
      }
      if (!res.payload) {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex h-screen justify-center bg-gray-100'>
      <form
        className='mt-32 h-fit w-96 rounded-lg bg-white p-6 shadow-md'
        onSubmit={handleUserLogin}
      >
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-800'>
          Login
        </h2>

        <div className='mb-4'>
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='input'
            placeholder='Enter your email'
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
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
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>

        <button type='submit' className='atc-button block w-full'>
          Login
        </button>
        <p className='mt-4'>
          You have not an account?{' '}
          <Link href={'/signup'} className='text-surfie-green-600'>
            Signup Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
