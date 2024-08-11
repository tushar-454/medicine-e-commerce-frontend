import { FaCartPlus } from 'react-icons/fa';

const Carts = () => {
  return (
    <div className='relative'>
      <FaCartPlus className='size-10 cursor-pointer rounded-full bg-surfie-green-600 p-2 text-4xl text-white' />
      <span className='absolute -right-2 -top-1 grid size-5 place-items-center rounded-full bg-crimson-red-600 text-sm text-white'>
        3
      </span>
    </div>
  );
};

export default Carts;
