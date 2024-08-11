import { FaSearch } from 'react-icons/fa';

const SearchMedicing = () => {
  return (
    <div className='hidden md:block'>
      <form className='flex items-center'>
        <input
          type='text'
          placeholder='Search your medicing'
          className='rounded-lg border px-3 py-2 outline-none md:w-48 lg:w-96'
        />
        <button>
          <FaSearch className='relative -left-[10px] h-[42px] w-16 cursor-pointer rounded-r-lg bg-surfie-green-600 px-3 py-2 text-white' />
        </button>
      </form>
    </div>
  );
};

export default SearchMedicing;
