import { getCarts } from '@/api/cart';
import { fetchProduct } from '@/api/product';
import { toggleModal } from '@/feature/publicStateSlice/publicStateSlice';
import { AppDispatch, RootState } from '@/store/store';
import { ProductCardProps } from '@/types/product';
import axios from '@/utils/axios';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  const [isVarientOpen, setIsVarientOpen] = useState(false);
  const [selectedVarient, setSelectedVarient] = useState(0);
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');

  // handle add to cart
  const handleAddToCart = async () => {
    if (!user) {
      return toast.error('Please login first to add to cart');
    }
    const newCartItem = {
      user: user?._id,
      product: product._id,
      quantity: 1,
      varient: selectedVarient,
    };
    try {
      const res = await axios.post('/cart/create', { ...newCartItem });
      if (res.data.status === 201) {
        toast.success('Product added to cart');
        dispatch(getCarts(user._id));
        dispatch(
          fetchProduct({ category: categoryQuery || '', user: user._id }),
        );
      } else {
        toast.error('Failed to add product to cart');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='rounded-lg bg-white shadow-lg'>
      <div className='rounded-t-lg'>
        <Image
          src={product.photo}
          alt={product.name}
          width={300}
          height={100}
          className='h-60 w-full rounded-t-lg object-cover'
        />
      </div>
      <div className='relative space-y-2 p-3'>
        <p className='text-2xl font-semibold'>{product.name}</p>
        <p className='text-xl font-semibold text-surfie-green-400'>
          {product.description}
        </p>
        <p className='flex gap-2 font-medium text-neutral-400'>
          <span>{product.variants[0].dose}</span>
          <span>{product.variants[0].package_size}</span>
        </p>
        <p className='!mb-5 flex flex-wrap gap-6'>
          <span className='text-xl font-bold'>
            <span className='flex items-center'>
              <TbCurrencyTaka className='text-2xl' />
              {product.variants[0].price -
                (product.variants[0].price * product.discount) / 100}
            </span>
          </span>
          <span className='text-neutral-400 line-through'>
            {product.variants[0].price}
          </span>
          <span className='font-medium text-crimson-red-600'>
            {product.discount}% OFF
          </span>
        </p>
        {/* variant view */}
        <div
          className={`absolute left-0 top-0 flex h-full w-full flex-col rounded-b-lg bg-black/80 backdrop-blur transition-all ${isVarientOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <p className='border-b-2 border-black bg-white px-2 pb-2 text-2xl font-semibold'>
            {product.name}
          </p>
          <div className='flex-grow'>
            {product?.variants?.map((variant, idx) => (
              <div
                key={variant._id}
                onClick={() => setSelectedVarient(idx)}
                className={`flex cursor-pointer gap-5 border-b-2 p-2 text-lg active:bg-surfie-green-200 ${selectedVarient === idx ? 'bg-surfie-green-200' : 'bg-white text-black'}`}
              >
                <span>{variant.dose}</span>
                <span>{variant.package_size}</span>
                <span className='flex items-center'>
                  <TbCurrencyTaka className='text-xl' />
                  {variant.price}
                </span>
              </div>
            ))}
          </div>
          <Link
            href={`/product/${product._id}`}
            className='mt-4 block w-full bg-neutral-200 px-3 py-2 text-center text-black'
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className='atc-button mt-2 block w-full rounded-b-lg rounded-t-none'
          >
            Add to cart
          </button>
        </div>
        {/* first view atc button  */}
        {!product.isCarted && (
          <button
            onClick={() => setIsVarientOpen(true)}
            className='atc-button block w-full disabled:cursor-not-allowed disabled:bg-crimson-red-200'
            disabled={product.quantity === 0}
          >
            {product.quantity === 0 ? 'Stock Out' : 'Add to cart'}
          </button>
        )}
        {product.isCarted && (
          <button
            onClick={() => dispatch(toggleModal())}
            className='atc-button block w-full bg-blue-600/90 hover:bg-blue-600'
          >
            View cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
