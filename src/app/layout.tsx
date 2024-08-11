import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import ProviderWrapper from './ProviderWrapper';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Medicine E-Commerce',
  description:
    'An online platform for purchasing medicines and healthcare products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={outfit.className}>
        <ToastContainer />
        <ProviderWrapper>
          <Header />
          <div className='flex'>
            <Sidebar />
            <div>{children}</div>
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
