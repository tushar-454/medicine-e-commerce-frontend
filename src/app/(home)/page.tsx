'use client';

import { fetchProduct } from '@/api/product';
import Cart from '@/components/cart/Cart';
import ProductCard from '@/components/product/ProductCard';
import { AppDispatch, RootState } from '@/store/store';
import { ProductType } from '@/types/product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const {
    isLoading,
    isError,
    product: products,
  } = useSelector((state: RootState) => state.product);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(
      fetchProduct({
        category: '',
        user: user?._id || '66b9f5567d9698830f799f8e',
      }),
    );
  }, [dispatch, user]);

  return (
    <>
      <div className='p-5'>
        <p className='text-lg font-medium'>All Medicine</p>
        {/* all medicine wrapper  */}
        {isLoading && <p className='mt-10 text-neutral-400'>Loading...</p>}
        {!isLoading && isError && (
          <p className='mt-10 text-neutral-400'>
            Something is wrong fetching medicine
          </p>
        )}
        {!isLoading && !isError && products?.length === 0 && (
          <p className='mt-10 text-neutral-400'>No medicine found</p>
        )}
        <div className='my-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
          {!isError &&
            !isLoading &&
            products &&
            products?.length > 0 &&
            products?.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </div>
      <div className='fixed right-0 top-80 rounded-lg'>
        <Cart />
      </div>
    </>
  );
}
