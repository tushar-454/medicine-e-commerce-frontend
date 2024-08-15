import Header from '@/components/header/Header';
import PrivateRoute from '@/components/shared/PrivateRoute';
import ProviderWrapper from '../(home)/ProviderWrapper';

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProviderWrapper>
      <PrivateRoute>
        <Header />
        <div>{children}</div>
      </PrivateRoute>
    </ProviderWrapper>
  );
}
