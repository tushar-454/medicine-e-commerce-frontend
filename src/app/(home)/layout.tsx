import Sidebar from '@/components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import ProviderWrapper from './ProviderWrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderWrapper>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex-grow'>{children}</div>
      </div>
    </ProviderWrapper>
  );
}
