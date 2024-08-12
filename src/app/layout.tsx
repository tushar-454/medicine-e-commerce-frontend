import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    <html lang='en' suppressHydrationWarning={true}>
      <body className={outfit.className}>
        <ToastContainer />
        <div>{children}</div>
        <div id='modal-root'></div>
      </body>
    </html>
  );
}
