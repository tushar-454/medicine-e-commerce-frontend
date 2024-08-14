import ProfileSidebar from '@/components/profile/ProfileSidebar';
import PrivateRoute from '@/components/sidebar/PrivateRoute';
import ProviderWrapper from '../(home)/ProviderWrapper';
import Header from '../../components/header/Header';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderWrapper>
      <PrivateRoute>
        <Header />
        <div className='flex'>
          <ProfileSidebar />
          <div className='w-full flex-grow overflow-hidden'>{children}</div>
        </div>
      </PrivateRoute>
    </ProviderWrapper>
  );
}
