'use client';
import { fetchAdminProduct } from '@/api/product';
import ProductItem from '@/components/product/ProductItem';
import { AppDispatch, RootState } from '@/store/store';
import { ProductType } from '@/types/product';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
  const {
    isError,
    isLoading,
    product: products,
  } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAdminProduct());
  }, [dispatch]);
  return (
    <div className='p-5'>
      <h2 className='text-xl font-semibold'>All Products</h2>
      {isError && (
        <p className='my-10 animate-pulse text-red-500'>
          Something went wrong getting Product lists
        </p>
      )}
      {!isLoading && Array.isArray(products) && products.length === 0 && (
        <p className='my-10 animate-pulse text-black'>No Product Item</p>
      )}
      {/* products here  */}
      <div className='my-10 w-full overflow-x-auto'>
        {!isError &&
          !isLoading &&
          Array.isArray(products) &&
          products.length > 0 && (
            <table className='w-full overflow-x-scroll'>
              <thead>
                <tr className='bg-neutral-200'>
                  <td className='p-4 font-bold'>Image</td>
                  <td className='p-4 font-bold'>Name</td>
                  <td className='p-4 font-bold'>Quantity</td>
                  <td className='p-4 font-bold'>Category</td>
                  <td className='p-4 font-bold'>Discount</td>
                  <td className='p-4 font-bold'>Featured</td>
                  <td className='p-4 font-bold'>Special</td>
                  <td className='p-4 font-bold'>Popular</td>
                  <td className='p-4 font-bold'>Trending</td>
                  <td className='p-4 font-bold'>Discounted</td>
                  <td className='p-4 font-bold'>Deleted</td>
                </tr>
              </thead>
              {isLoading && <p>Loading...</p>}
              {!isError && !isLoading && Array.isArray(products) && (
                <tbody>
                  {products.map((product: ProductType) => (
                    <ProductItem key={product._id} product={product} />
                  ))}
                </tbody>
              )}
            </table>
          )}
      </div>
    </div>
  );
};

export default Products;
