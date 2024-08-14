'use client';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ReactNode } from 'react';

const AdminRoutes = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (user?.role !== 'admin' && user?.role !== 'super-admin') {
      router.replace('/');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return children;
};

export default AdminRoutes;
