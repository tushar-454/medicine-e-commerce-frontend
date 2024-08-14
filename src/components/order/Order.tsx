import { toggleOrder } from '@/feature/publicStateSlice/publicStateSlice';
import { AppDispatch, RootState } from '@/store/store';
import { CartType } from '@/types/cart';
import { OrderProps } from '@/types/order';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../shared/Modal';

const Order: React.FC<OrderProps> = ({ openOrder }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { carts } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.user);

  // handle order now function
  const handleOrderNow = () => {
    const order = {
      user: user?._id,
      products: carts.map((cart: CartType) => {
        const total = cart.product.variants[cart.varient].price * cart.quantity;
        const withDiscount = total - (total * cart.product.discount) / 100;
        return {
          product: cart.product._id,
          quantity: cart.quantity,
          varient: cart.varient,
          total: withDiscount,
        };
      }),
      totalAmount: carts.reduce((acc, cur: CartType) => {
        const total = cur.product.variants[cur.varient].price * cur.quantity;
        const withDiscount = total - (total * cur.product.discount) / 100;
        return acc + withDiscount;
      }, 0),
      paymentMethod: 'card',
      shippingInfo: {
        division: user?.division,
        district: user?.district,
        upazila: user?.upazila,
        address: user?.address,
      },
      Phone: '+8801234567890',
    };
    console.log(order);
  };

  // modal open close function
  const closeModal = () => dispatch(toggleOrder());

  return (
    <Modal isOpen={openOrder} onClose={closeModal} title={'Order'}>
      <div className='mt-10 flex flex-col gap-10 lg:flex-row'>
        {/* shipping address  */}
        <div className='w-full lg:w-1/2'>
          <h2 className='text-lg font-medium'>Shipping Address</h2>
          {/* shpping form  */}
          <form className='mt-5'>
            <div className='mb-4'>
              <label htmlFor='division' className='label'>
                Division
              </label>
              <input
                type='text'
                id='division'
                className='input'
                placeholder='Enter your division'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='district' className='label'>
                District
              </label>
              <input
                type='text'
                id='district'
                name='district'
                className='input'
                placeholder='Enter your district'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='upazila' className='label'>
                Upazila
              </label>
              <input
                type='text'
                id='upazila'
                name='upazila'
                className='input'
                placeholder='Enter your upazila'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='address' className='label'>
                Address
              </label>
              <input
                type='text'
                id='address'
                name='address'
                className='input'
                placeholder='Enter your address'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='label'>
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                className='input'
                placeholder='Enter your phone'
              />
            </div>
            <button className='atc-button'>Update Profile</button>
          </form>
        </div>
        {/* order summary  */}
        <div className='w-full lg:w-1/2'>
          <h2 className='text-lg font-medium'>Order Summary</h2>
          <div className='mt-5'>
            {carts.map((cart: CartType) => (
              <p key={cart._id} className='flex items-center justify-between'>
                <span>
                  {cart.product.name} {cart.product.variants[cart.varient].dose}{' '}
                  {cart.product.variants[cart.varient].package_size}
                </span>
                <span>
                  {(
                    cart.product.variants[cart.varient].price * cart.quantity
                  ).toFixed(2)}
                </span>
              </p>
            ))}
            <p className='w-full border-b'></p>
            <p className='flex items-center justify-between'>
              <span>total: </span>
              <span>
                {carts.reduce((acc, cur: CartType) => {
                  const total =
                    cur.product.variants[cur.varient].price * cur.quantity;

                  return acc + total;
                }, 0)}
              </span>
            </p>
            <p className='flex items-center justify-between'>
              <span>discount: </span>
              <span>
                {carts.reduce((acc, cur: CartType) => {
                  const discount =
                    (cur.product.variants[cur.varient].price *
                      cur.quantity *
                      cur.product.discount) /
                    100;
                  return acc + discount;
                }, 0)}
              </span>
            </p>
            <p className='w-full border-b'></p>
            <p className='flex items-center justify-between'>
              <span>sub total: </span>
              <span>
                {carts.reduce((acc, cur: CartType) => {
                  const total =
                    cur.product.variants[cur.varient].price * cur.quantity;
                  const withDiscount =
                    total - (total * cur.product.discount) / 100;
                  return acc + withDiscount;
                }, 0)}
              </span>
            </p>
            <button onClick={handleOrderNow} className='atc-button my-10'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Order;
