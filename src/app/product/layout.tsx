import PrivateRoute from '@/components/shared/PrivateRoute';
import ProviderWrapper from '../(home)/ProviderWrapper';
import Header from '../../components/header/Header';

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
