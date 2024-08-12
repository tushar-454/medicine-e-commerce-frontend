import { getCarts } from '@/api/cart';
import { AppDispatch, RootState } from '@/store/store';
import { useEffect } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Carts = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const carts = useSelector((state: RootState) => state.cart.carts);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (user) {
      dispatch(getCarts(user._id));
    }
  }, [dispatch, user]);
  return (
    <div className='relative'>
      <FaCartPlus className='size-10 cursor-pointer rounded-full bg-surfie-green-600 p-2 text-4xl text-white' />
      <span className='absolute -right-2 -top-1 grid size-5 place-items-center rounded-full bg-crimson-red-600 text-sm text-white'>
        {carts.length || 0}
      </span>
    </div>
  );
};

export default Carts;
