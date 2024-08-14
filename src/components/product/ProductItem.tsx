import { ProductItemProps } from '@/types/product';
import Image from 'next/image';
import React from 'react';

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <tr key={product._id} className='transition-all hover:bg-neutral-200/50'>
      <td className='border p-2'>
        <Image
          src={product.photo}
          alt={product.name}
          width={50}
          height={50}
          className='h-12 w-12 rounded-lg object-cover'
        />
      </td>
      <td className='border p-2'>{product.name}</td>
      <td className='border p-2'>{product.quantity}</td>
      <td className='border p-2'>{product.category}</td>
      <td className='border p-2'>{product.discount}%</td>
      <td className='border p-2'>
        <input
          type='checkbox'
          name='isFeatured'
          id='isFeatured'
          checked={product.isFeatured}
        />
      </td>
      <td className='border p-2'>
        <input
          type='checkbox'
          name='isSpecial'
          id='isSpecial'
          checked={product.isSpecial}
        />
      </td>
      <td className='border p-2'>
        <input
          type='checkbox'
          name='isPopular'
          id='isPopular'
          checked={product.isPopular}
        />
      </td>
      <td className='border p-2'>
        <input
          type='checkbox'
          name='isTrending'
          id='isTrending'
          checked={product.isTrending}
        />
      </td>
      <td className='border p-2'>
        <input
          type='checkbox'
          name='isDiscounted'
          id='isDiscounted'
          checked={product.isDiscounted}
        />
      </td>
      <td className='border p-2'>
        <input
          type='checkbox'
          name='isDeleted'
          id='isDeleted'
          checked={product.isDeleted}
        />
      </td>
    </tr>
  );
};

export default ProductItem;
