'use client';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ReactNode } from 'react';

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return children;
  }

  return children;
};

export default PublicRoute;
