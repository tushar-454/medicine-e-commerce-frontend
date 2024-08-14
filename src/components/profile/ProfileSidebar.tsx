'use client';

import { getCarts } from '@/api/cart';
import { deleteToken } from '@/api/token';
import logout from '@/assets/log-out.png';
import order from '@/assets/received.png';
import { removeUser } from '@/feature/userSlice/userSlice';
import { AppDispatch, persistor, RootState } from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProfileSidebar = () => {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.publicState.isSidebarOpen,
  );
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // handle logout
  const handleLogout = async () => {
    await dispatch(deleteToken());
    await dispatch(removeUser());
    await dispatch(getCarts('66b9f5567d9698830f799f8e'));
    await persistor.purge();
    localStorage.clear();
    toast.success('Logout successfully');
    router.replace('/');
  };

  return (
    <aside
      className={`absolute h-screen min-w-[300px] border-r-2 border-surfie-green-500 bg-white transition-all lg:static ${isSidebarOpen ? 'left-0' : '-left-80'}`}
    >
      <Link
        href={'/profile'}
        className='my-2 flex items-center gap-2 border border-transparent bg-surfie-green-100 p-3 py-3 font-medium text-black transition-all hover:border hover:border-white hover:bg-surfie-green-200'
      >
        <Image
          src={order}
          alt='Order icon'
          width={20}
          height={20}
          className='min-w-8'
        />
        <span>Order</span>
      </Link>
      <Link
        onClick={handleLogout}
        href={'/'}
        className='my-2 flex items-center gap-2 border border-transparent bg-surfie-green-100 p-3 py-3 font-medium text-black transition-all hover:border hover:border-white hover:bg-surfie-green-200'
      >
        <Image
          src={logout}
          alt='logout icon'
          width={20}
          height={20}
          className='min-w-8'
        />
        <span>Logout</span>
      </Link>
    </aside>
  );
};

export default ProfileSidebar;
