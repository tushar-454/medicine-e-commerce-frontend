import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import Header from '@/components/header/Header';
import PrivateRoute from '@/components/sidebar/PrivateRoute';
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
            <Header />
            <div className='flex'>
              <DashboardSidebar />
              <div className='flex-grow'>{children}</div>
            </div>
          </PrivateRoute>
        </ProviderWrapper>
      </main>
    </div>
  );
}
