'use client';

import store, { persistor } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
