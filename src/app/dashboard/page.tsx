'use client';

import AdminDashboard from '@/components/dashboard/AdminDashboard';
import SuperAdminDashboard from '@/components/dashboard/SuperAdminDashboard';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      {user?.role === 'admin' && <AdminDashboard />}
      {user?.role === 'super-admin' && <SuperAdminDashboard />}
    </>
  );
};

export default Dashboard;
