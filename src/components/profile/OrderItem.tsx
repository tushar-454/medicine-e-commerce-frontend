import { OrderItemProps, OrderProductType } from '@/types/order';
import axios from '@/utils/axios';
import { toast } from 'react-toastify';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  console.log(order.orderStatus);
  const handleOrderUpdate = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    orderId: string,
  ) => {
    try {
      const res = await axios.put(`/order/user/${orderId}`, {
        orderStatus: e.target.value,
        isCanceled: e.target.value === 'canceled' ? true : false,
      });
      if (res.data.status === 200) {
        toast.success('Order status updated successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr className='transition-all hover:bg-neutral-200/50'>
      <td className='border p-2'>{order._id}</td>
      <td className='border p-2'>
        {order.products.map(
          (product: OrderProductType) =>
            `${product.product.name}-${product.varient.dose}-${product.varient.package_size}, `,
        )}
      </td>
      <td className='border p-2'>{order.totalAmount}</td>
      <td className='border p-2'>
        {(order.orderStatus === 'pending' ||
          order.orderStatus === 'canceled') && (
          <select
            className='input min-w-[150px] max-w-[150px]'
            id='status'
            name='status'
            defaultValue={order.orderStatus}
            onChange={(e) => handleOrderUpdate(e, order._id)}
          >
            <option value='pending'>Pending</option>
            <option value='canceled'>Canceled</option>
          </select>
        )}
        {(order.orderStatus === 'processing' ||
          order.orderStatus === 'delivered' ||
          order.orderStatus === 'refunded' ||
          order.orderStatus === 'returned' ||
          order.orderStatus === 'shipped') && (
          <select
            className='input min-w-[150px] max-w-[150px]'
            id='status'
            name='status'
            defaultValue={order.orderStatus}
            disabled
          >
            <option value='processing'>Processing</option>
            <option value='shipped'>Shipped</option>
            <option value='delivered'>Delivered</option>
            <option value='refunded'>Refunded</option>
            <option value='returned'>Returned</option>
          </select>
        )}
      </td>
    </tr>
  );
};

export default OrderItem;
