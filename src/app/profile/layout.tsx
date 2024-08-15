import Header from '@/components/header/Header';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import PrivateRoute from '@/components/shared/PrivateRoute';
import ProviderWrapper from '../(home)/ProviderWrapper';

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
