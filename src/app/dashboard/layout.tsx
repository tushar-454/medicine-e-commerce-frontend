import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import Header from '@/components/header/Header';
import AdminRoutes from '@/components/shared/AdminRoutes';
import PrivateRoute from '@/components/shared/PrivateRoute';
import ProviderWrapper from '../(home)/ProviderWrapper';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <ProviderWrapper>
          <PrivateRoute>
            <AdminRoutes>
              <Header />
              <div className='flex'>
                <DashboardSidebar />
                <div className='w-full flex-grow overflow-hidden'>
                  {children}
                </div>
              </div>
            </AdminRoutes>
          </PrivateRoute>
        </ProviderWrapper>
      </main>
    </div>
  );
}
