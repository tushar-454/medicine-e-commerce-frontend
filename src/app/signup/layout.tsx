import PublicRoute from '@/components/shared/PublicRoute';
import ProviderWrapper from '../(home)/ProviderWrapper';

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <ProviderWrapper>
          <PublicRoute>{children}</PublicRoute>
        </ProviderWrapper>
      </main>
    </div>
  );
}
