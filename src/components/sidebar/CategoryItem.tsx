'use client';
import { CategoryItemProps } from '@/types/category';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isOpen,
  toggle,
  parentKey,
  openStates,
}) => {
  const currentKey = parentKey;
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLinkClick = () => {
    if (!isMounted) return;

    const query = searchParams.get('category');
    const params = new URLSearchParams(searchParams.toString());

    if (query === category.slug) {
      params.delete('category');
    } else {
      params.set('category', category.slug);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className='my-2 border border-transparent bg-surfie-green-100 p-3 py-3 text-black transition-all hover:border hover:border-white hover:bg-surfie-green-200'>
      <button
        onClick={() => toggle(currentKey)}
        className='flex h-full w-full items-center justify-between font-medium text-black outline-none'
      >
        {category?.subCategories?.length > 0 ? (
          <span className='flex gap-2'>
            <Image
              src={category.photo}
              alt={category.slug}
              width={20}
              height={20}
            />
            <span>{category.name}</span>
          </span>
        ) : (
          <button
            // href={`/?category=${category.slug}`}
            onClick={handleLinkClick}
            className='flex w-full gap-2'
          >
            <Image
              src={category.photo}
              alt={category.slug}
              width={20}
              height={20}
            />
            <span>{category.name}</span>
          </button>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
