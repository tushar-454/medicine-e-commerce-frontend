import Header from '@/components/header/Header';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProviderWrapper from '../(home)/ProviderWrapper';

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderWrapper>
      <Header />
      <div className='flex'>
        <ProfileSidebar />
        <div className='flex-grow'>{children}</div>
      </div>
    </ProviderWrapper>
  );
}
