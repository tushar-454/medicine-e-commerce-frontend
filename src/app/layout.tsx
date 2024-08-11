import Header from '@/components/Header/Header';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import './globals.css';

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
    <html lang='en'>
      <body className={outfit.className}>
        <ToastContainer />
        <>
          <Header />
          {children}
        </>
        </body>
    </html>
  );
}
