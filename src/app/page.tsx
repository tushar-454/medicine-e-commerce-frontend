'use client';

import { fetchProduct } from '@/api/product';
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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
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
      <div>
        {!isError &&
          !isLoading &&
          products &&
          products?.length > 0 &&
          products?.map((product: ProductType) => (
            <div key={product._id} className='p-2'>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p>{product.variants.toString()} </p>
            </div>
          ))}
      </div>
    </div>
  );
}
