'use client';

import { getOrders } from '@/api/order';
import OrderItem from '@/components/profile/OrderItem';
import { AppDispatch, RootState } from '@/store/store';
import { OrderType } from '@/types/order';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const { isError, isLoading, orders } = useSelector(
    (state: RootState) => state.order,
  );
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (user) dispatch(getOrders(user?._id));
  }, [dispatch, user]);
  return (
    <div className='p-5'>
      <h2 className='text-xl font-semibold'>All Orders</h2>
      {isError && (
        <p className='my-10 animate-pulse text-red-500'>
          Something went wrong getting order lists
        </p>
      )}
      {!isLoading && Array.isArray(orders) && orders.length === 0 && (
        <p className='my-10 animate-pulse text-black'>No Order Item</p>
      )}
      {/* orders here  */}
      <div className='my-10 w-full overflow-x-auto'>
        {!isError &&
          !isLoading &&
          Array.isArray(orders) &&
          orders.length > 0 && (
            <table className='w-full overflow-x-scroll'>
              <thead>
                <tr className='bg-neutral-200'>
                  <td className='min-w-12 p-4 font-bold'>Order ID</td>
                  <td className='min-w-[320px] p-4 font-bold'>Name</td>
                  <td className='p-4 font-bold'>Price</td>
                  <td className='p-4 font-bold'>Status</td>
                </tr>
              </thead>
              {isLoading && <p>Loading...</p>}
              {!isError && !isLoading && Array.isArray(orders) && (
                <tbody>
                  {orders.map((order: OrderType) => (
                    <OrderItem key={order._id} order={order} />
                  ))}
                </tbody>
              )}
            </table>
          )}
      </div>
    </div>
  );
};

export default Profile;
