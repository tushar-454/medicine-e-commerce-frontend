'use client';

import { fetchCategorise } from '@/api/category';
import { AppDispatch, RootState } from '@/store/store';
import { categoryType } from '@/types/category';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector(
    (state: RootState) => state.category.categories,
  );
  const dispatch = useDispatch<AppDispatch>();
  const [subCategories, setSubCategories] = useState<categoryType[] | null>(
    null,
  );
  const [subSubCategories, setSubSubCategories] = useState<
    categoryType[] | null
  >(null);
  // handle sub categories
  const handleSubCategories = (category: categoryType) => {
    if (category.subCategories) setSubCategories(category.subCategories);
  };
  // handle sub sub-categories
  const handleSubSubCategories = (subCategory: categoryType) => {
    if (subCategory.subCategories)
      setSubSubCategories(subCategory.subCategories);
  };
  useEffect(() => {
    dispatch(fetchCategorise());
  }, [dispatch]);
  return (
    <div className='p-5'>
      <h2 className='text-xl font-medium'>Categories</h2>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/3'>
          <h2 className='text-lg font-medium'>Main Categories</h2>
          <ul>
            {categories.map((category: categoryType) => (
              <li
                key={category._id}
                className='cursor-pointer'
                onClick={() => handleSubCategories(category)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full lg:w-1/3'>
          <h2 className='text-lg font-medium'>Sub-Categories</h2>
          <ul>
            {subCategories &&
              subCategories.map((subCategory: categoryType) => (
                <li
                  key={subCategory._id}
                  className='cursor-pointer'
                  onClick={() => handleSubSubCategories(subCategory)}
                >
                  {subCategory.name}
                </li>
              ))}
          </ul>
        </div>
        <div className='w-full lg:w-1/3'>
          <h2 className='text-lg font-medium'> Sub sub-Categories</h2>
          <ul>
            {subSubCategories &&
              subSubCategories.map((subSubCategory: categoryType) => (
                <li key={subSubCategory._id}>{subSubCategory.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
