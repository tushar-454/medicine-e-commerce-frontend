'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      {user?.role === 'admin' && <div>Admin Dashboard</div>}
      {user?.role === 'super-admin' && <div>Super Admin Dashboard</div>}
    </>
  );
};

export default Dashboard;
