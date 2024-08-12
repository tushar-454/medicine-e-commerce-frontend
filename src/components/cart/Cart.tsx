'use client';

import { RootState } from '@/store/store';
import { CartType } from '@/types/cart';
import Image from 'next/image';
import { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from '../shared/Modal';

const Cart = () => {
  const { carts, isError, isLoading } = useSelector(
    (state: RootState) => state.cart,
  );

  const total =
    !isError &&
    !isLoading &&
    carts.length > 0 &&
    carts.reduce((acc, cur: CartType) => {
      const total = cur.product.variants[cur.varient].price * cur.quantity;
      const withDiscount = total - (total * cur.product.discount) / 100;
      return acc + withDiscount;
    }, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (carts.length > 0) setIsModalOpen(true);
    toast.error('No item in cart');
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div onClick={openModal} className='cursor-pointer'>
        <div className='flex flex-col items-center gap-2 bg-surfie-green-500 p-3'>
          <BsCart4 className='text-3xl text-white' />
          <span className='text-white'>{carts.length} Items</span>
        </div>
        <div className='flex items-center justify-center bg-crimson-red-600 p-2 text-white'>
          <TbCurrencyTaka />
          <span>{(total || 0).toFixed(2)}</span>
        </div>{' '}
      </div>
      {/* cart modal  */}
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={'Shopping Cart'}
        >
          <div className='mt-8 grid gap-4'>
            {carts?.map((cart: CartType) => (
              <div
                key={cart._id}
                className='flex items-center justify-between gap-2'
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src={cart.product.photo}
                    alt={cart.product.name}
                    width={100}
                    height={100}
                    className='min-w-12 rounded-lg object-cover'
                  />
                  <p>
                    <p>{cart.product.name}</p>
                    <p>{cart.product.variants[cart.varient].dose}</p>
                    <p>{cart.product.variants[cart.varient].package_size}</p>
                  </p>
                </div>
                <div className='flex flex-col items-end gap-2'>
                  <RiDeleteBin5Line className='cursor-pointer text-xl' />
                  <span>
                    <small className='text-crimson-red-600 line-through'>
                      {cart.product.discount}% OFF
                    </small>{' '}
                    <span className='font-bold'>
                      {(cart.product.variants[cart.varient].price -
                        (cart.product.variants[cart.varient].price *
                          cart.product.discount) /
                          100) *
                        cart.quantity}
                    </span>
                  </span>
                  <span className='flex w-28 items-center justify-between gap-1 rounded-lg border-2 border-surfie-green-500 p-2'>
                    <span>
                      Qyt:{' '}
                      <small className='text-lg font-bold'>
                        {cart.quantity}
                      </small>
                    </span>
                    <span>
                      <MdKeyboardArrowDown className='rotate-180 cursor-pointer' />
                      <MdKeyboardArrowDown className='cursor-pointer' />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
