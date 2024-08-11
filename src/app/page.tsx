'use client';

import { login } from '@/feature/userSlice/userSlice';
import { AppDispatch, persistor } from '@/store/store';
import { useDispatch } from 'react-redux';

export default function LoginComponent() {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    const userInfo = {};
    const lastLogin = new Date().toISOString();
    dispatch(login({ userInfo, lastLogin }));
  };

  const logout = () => {
    persistor.purge();
  };

  return (
    <div className='p-5'>
      <button onClick={handleLogin} className='rounded-lg bg-gray-300 p-2'>
        Login
      </button>
      <button onClick={logout} className='rounded-lg bg-gray-300 p-2'>
        Logout
      </button>
    </div>
  );
}
