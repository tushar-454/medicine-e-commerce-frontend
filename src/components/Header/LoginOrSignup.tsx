import Link from 'next/link';

const LoginOrSignup = () => {
  return (
    <Link
      href={'/login'}
      className='rounded-lg bg-surfie-green-600 px-3 py-2 text-white'
    >
      Login/Signup
    </Link>
  );
};

export default LoginOrSignup;
