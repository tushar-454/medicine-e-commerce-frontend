import { HiMenuAlt2 } from 'react-icons/hi';
import Container from '../shared/Container';
import Carts from './Carts';
import Location from './Location';
import LoginOrSignup from './LoginOrSignup';
import Logo from './Logo';
import SearchMedicing from './SearchMedicing';

const Header = () => {
  return (
    <header className='border-b-4 border-surfie-green-600 bg-white py-3'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between'>
            <HiMenuAlt2 className='cursor-pointer rounded-lg bg-surfie-green-600 p-2 text-4xl text-white' />
            <Logo />
          </div>
          <SearchMedicing />
          <div className='flex items-center justify-between gap-3 sm:gap-10'>
            <Location />
            <Carts />
            <LoginOrSignup />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
