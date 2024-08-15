import { OrderItemProps } from '@/types/order';
import axios from '@/utils/axios';
import React from 'react';
import { toast } from 'react-toastify';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  // handle order update
  const handleOrderUpdate = async (orderId: string, status: string) => {
    try {
      const res = await axios.put(`/order/admin/${orderId}`, {
        orderStatus: status,
      });
      if (res.data.status === 200) {
        toast.success('Order status updated successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr key={order._id} className='transition-all hover:bg-neutral-200/50'>
      <td className='border p-2'>{order._id}</td>
      <td className='border p-2'>{order.user.name}</td>
      <td className='border p-2'>
        {order.products.map((product) => {
          return (
            <span key={product.product._id}>
              <span>{product.product.name}</span>
              {', '}
              <span>{product.varient.dose}</span>
              {', '}
              <span>{product.varient.package_size}</span>
              {', '} <br />
              <span>Quantity: {product.quantity}</span>
              {', '} <br />
            </span>
          );
        })}
      </td>
      <td className='border p-2'>
        <a href={`tel:${order.phone}`}>{order.phone}</a>
      </td>
      <td className='border p-2'>{order.totalAmount}</td>
      <td className='border p-2'>{order.paymentMethod}</td>
      <td className='border p-2'>
        {order.shippingInfo.division}, {order.shippingInfo.district},{' '}
        {order.shippingInfo.upazila}, {order.shippingInfo.address},
      </td>
      <td className='border p-2'>
        <select
          name='status'
          id='status'
          defaultValue={order.orderStatus}
          className='input min-w-36'
          onChange={(e) => handleOrderUpdate(order._id, e.target.value)}
        >
          <option value='pending'>Pending</option>
          <option value='processing'>Processing</option>
          <option value='shipped'>Shipped</option>
          <option value='delivered'>Delivered</option>
          <option value='canceled'>Canceled</option>
          <option value='refunded'>Refunded</option>
          <option value='returned'>Returned</option>
        </select>
      </td>
    </tr>
  );
};

export default OrderItem;
