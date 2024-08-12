import ProviderWrapper from '../(home)/ProviderWrapper';

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <ProviderWrapper>{children}</ProviderWrapper>
      </main>
    </div>
  );
}
