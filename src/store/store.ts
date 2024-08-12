import cartReducer from '@/feature/cartSlice/cartSlice';
import categoryReducer from '@/feature/categoriesSlice/categoriesSlice';
import productReducer from '@/feature/productSlice/productSlice';
import publicStateReducer from '@/feature/publicStateSlice/publicStateSlice';
import tokenReducer from '@/feature/tokenSlice/tokenSlice';
import userReducer from '@/feature/userSlice/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  publicState: publicStateReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  token: tokenReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
