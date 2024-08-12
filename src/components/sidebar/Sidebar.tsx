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
  const isSidebarOpen = useSelector(
    (state: RootState) => state.publicState.isSidebarOpen,
  );
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');

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
    <aside
      className={`absolute h-screen min-w-[300px] border-r-2 border-surfie-green-500 bg-white transition-all lg:static ${isSidebarOpen ? 'left-0' : '-left-80'}`}
    >
      {categories.map((category: categoryType, idx) => (
        <CategoryItem
          key={category._id}
          category={category}
          isOpen={!!openStates[category._id]}
          toggle={toggle}
          parentKey={category._id}
          openStates={openStates}
          categoryQuery={categoryQuery}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
