'use client';
import { getAdminOrders } from '@/api/order';
import OrderItem from '@/components/order/OrderItem';
import { AppDispatch, RootState } from '@/store/store';
import { OrderType } from '@/types/order';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Orders = () => {
  const { isError, isLoading, orders } = useSelector(
    (state: RootState) => state.order,
  );
  const [filterByStatus, setFilterByStatus] = useState<string>('');
  const [filterByDate, setFilterByDate] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAdminOrders({ filterByStatus, filterByDate }));
  }, [dispatch, filterByStatus, filterByDate]);
  return (
    <div className='p-5'>
      <h2 className='text-xl font-semibold'>All Orders</h2>
      <div className='mt-5 flex items-center gap-10'>
        <select
          name='filterByStatus'
          id='filterByStatus'
          className='input w-40'
          value={filterByStatus}
          onChange={(e) => setFilterByStatus(e.target.value)}
        >
          <option value=''>All</option>
          <option value='pending'>Pending</option>
          <option value='processing'>Processing</option>
          <option value='shipped'>Shipped</option>
          <option value='delivered'>Delivered</option>
          <option value='canceled'>Cancelled</option>
          <option value='refunded'>Refunded</option>
          <option value='returned'>Returned</option>
        </select>
        <div className='flex gap-3'>
          <button
            onClick={() => setFilterByDate('1')}
            className='rounded-lg border bg-white px-4 py-2 text-black'
          >
            First Orders
          </button>
          <button
            onClick={() => setFilterByDate('-1')}
            className='rounded-lg border bg-white px-4 py-2 text-black'
          >
            Last Orders
          </button>
        </div>
      </div>
      {isError && (
        <p className='my-10 animate-pulse text-red-500'>
          Something went wrong getting Product lists
        </p>
      )}
      {!isLoading && Array.isArray(orders) && orders.length === 0 && (
        <p className='my-10 animate-pulse text-black'>No Product Item</p>
      )}
      {/* orders here  */}
      <div className='my-10 w-full overflow-x-auto'>
        {!isError &&
          !isLoading &&
          Array.isArray(orders) &&
          orders.length > 0 && (
            <>
              <table className='w-full overflow-x-scroll'>
                <thead>
                  <tr className='bg-neutral-200'>
                    <td className='p-4 font-bold'>OrderId</td>
                    <td className='p-4 font-bold'>Name</td>
                    <td className='p-4 font-bold'>Products</td>
                    <td className='p-4 font-bold'>Phone</td>
                    <td className='whitespace-nowrap p-4 font-bold'>
                      Total Amount
                    </td>
                    <td className='whitespace-nowrap p-4 font-bold'>
                      Payment Method
                    </td>
                    <td className='p-4 font-bold'>Address</td>
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
            </>
          )}
      </div>
    </div>
  );
};

export default Orders;
