'use client';
import { fetchProduct } from '@/api/product';
import { AppDispatch } from '@/store/store';
import { CategoryItemProps } from '@/types/category';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch } from 'react-redux';

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isOpen,
  toggle,
  parentKey,
  openStates,
  categoryQuery,
}) => {
  const currentKey = parentKey;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (categoryQuery) {
      dispatch(fetchProduct(categoryQuery));
    } else {
      dispatch(fetchProduct());
    }
  }, [dispatch, categoryQuery]);

  return (
    <div className='my-2 border border-transparent bg-surfie-green-100 p-3 py-3 text-black transition-all hover:border hover:border-white hover:bg-surfie-green-200'>
      <button
        onClick={() => toggle(currentKey)}
        className='flex h-full w-full items-center justify-between font-medium text-black outline-none'
      >
        {category?.subCategories?.length > 0 ? (
          <Link href={'/'} className='flex gap-2'>
            <Image
              src={category.photo}
              alt={category.slug}
              width={20}
              height={20}
            />
            <span>{category.name}</span>
          </Link>
        ) : (
          <Link
            href={`/?category=${category.slug}`}
            className='flex w-full gap-2'
          >
            <Image
              src={category.photo}
              alt={category.slug}
              width={20}
              height={20}
            />
            <span>{category.name}</span>
          </Link>
        )}
        {category?.subCategories?.length > 0 && (
          <span>
            <IoIosArrowDown
              className={`transition-all ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden text-black transition-all duration-300 ease-in-out ${
          isOpen && category?.subCategories?.length > 0
            ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className='overflow-hidden pr-4 text-sm'>
          {category?.subCategories?.map((subCategory) => (
            <CategoryItem
              key={subCategory._id}
              category={subCategory}
              isOpen={!!openStates[`${currentKey}_${subCategory._id}`]}
              toggle={toggle}
              parentKey={`${currentKey}_${subCategory._id}`}
              openStates={openStates}
              categoryQuery={categoryQuery}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
