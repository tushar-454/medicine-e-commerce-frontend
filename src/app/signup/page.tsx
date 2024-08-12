import Link from 'next/link';
import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className='flex h-screen justify-center bg-gray-100'>
      <form className='mt-32 h-fit w-96 rounded-lg bg-white p-6 shadow-md'>
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
            />
            <button className='btnBlack whitespace-nowrap rounded-l-none'>
              Send code
            </button>
          </div>
        </div>

        <div className='mb-4'>
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
            />
            <button className='btnBlack rounded-l-none'>Verify</button>
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
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='photo'
            className='label cursor-pointer rounded-lg border p-5 text-center'
          >
            Uplaod your photo
          </label>
          <input type='file' id='photo' className='input' hidden />
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
