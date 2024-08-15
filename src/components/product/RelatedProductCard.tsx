import { ProductCardProps } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const RelatedProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        {/* first view atc button  */}
        <Link
          href={`/product/${product._id}`}
          className='atc-button block w-full text-center disabled:cursor-not-allowed disabled:bg-crimson-red-200'
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RelatedProductCard;
