import Link from 'next/link';

const Login = () => {
  return (
    <div className='flex h-screen justify-center bg-gray-100'>
      <form className='mt-32 h-fit w-96 rounded-lg bg-white p-6 shadow-md'>
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
