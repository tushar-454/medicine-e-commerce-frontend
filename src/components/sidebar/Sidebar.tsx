'use client';

import { fetchCategorise } from '@/api/category';
import { AppDispatch, RootState } from '@/store/store';
import { categoryType } from '@/types/category';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';

const Sidebar = () => {
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});
  const categories = useSelector(
    (state: RootState) => state.category.categories,
  );
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const search = searchParams.get('category');
  console.log(search);

  const toggle = (key: string) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  useEffect(() => {
    dispatch(fetchCategorise());
  }, [dispatch]);
  return (
    <aside className='h-screen min-w-[300px] border-r-2 border-surfie-green-500'>
      {/* <ul className='bg-surfie-green-400'>
        {categories?.map((category: category, idx: number) => (
          <li
            key={category._id}
            className='mb-5 p-4 text-xl font-medium'
            onClick={() => toggle(idx)}
          >
            <span className='flex items-center gap-2'>
              <Image
                src={category.photo}
                width={30}
                height={30}
                alt={category.name}
              />
              {category.name}
            </span>
            <ul
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              {category?.subCategories?.map((subCategory2) => (
                <li
                  key={subCategory2._id}
                  onClick={() => toggle(idx)}
                  className='overflow-hidden'
                >
                  <span className='flex items-center gap-2'>
                    <Image
                      src={subCategory2.photo}
                      width={30}
                      height={30}
                      alt={subCategory2.name}
                    />
                    {subCategory2.name}
                  </span>
                  <ul
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    {subCategory2?.subCategories?.map((subCategory3) => (
                      <li key={subCategory3._id} className='overflow-hidden'>
                        <span className='flex items-center gap-2'>
                          <Image
                            src={subCategory3.photo}
                            width={30}
                            height={30}
                            alt={subCategory3.name}
                          />
                          {subCategory3.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
      {categories.map((category: categoryType, idx) => (
        <CategoryItem
          key={category._id}
          category={category}
          isOpen={!!openStates[category._id]}
          toggle={toggle}
          parentKey={category._id}
          openStates={openStates}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
