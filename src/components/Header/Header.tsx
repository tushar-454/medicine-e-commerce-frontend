'use client';
import { toggleSidebar } from '@/feature/publicStateSlice/publicStateSlice';
import { AppDispatch, RootState } from '@/store/store';
import Image from 'next/image';
import { HiMenuAlt2 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../shared/Container';
import Carts from './Carts';
import Location from './Location';
import LoginOrSignup from './LoginOrSignup';
import Logo from './Logo';
import SearchMedicing from './SearchMedicing';

const Header = () => {
  const { isLoggedIn, user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}${user?.photo}`);
  return (
    <header className='border-b-4 border-surfie-green-600 bg-white py-3'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between'>
            <HiMenuAlt2
              onClick={() => dispatch(toggleSidebar())}
              className='block cursor-pointer rounded-lg bg-surfie-green-600 p-2 text-4xl text-white lg:hidden'
            />
            <Logo />
          </div>
          <SearchMedicing />
          <div className='flex items-center justify-between gap-3 sm:gap-10'>
            <Location />
            <Carts />
            {isLoggedIn ? (
              <div>
                {user && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${user?.photo}`}
                    alt={user?.name}
                    width={50}
                    height={50}
                    className='h-12 w-12 rounded-full object-cover'
                  />
                )}
              </div>
            ) : (
              <LoginOrSignup />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
