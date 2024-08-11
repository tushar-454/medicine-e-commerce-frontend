import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={logo}
        alt='Medicine Logo'
        width={100}
        height={50}
        className='w-44'
      />
    </Link>
  );
};

export default Logo;
