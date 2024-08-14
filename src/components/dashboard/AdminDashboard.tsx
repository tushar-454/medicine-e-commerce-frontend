import { fetchAdminUsers } from '@/api/user';
import { AppDispatch, RootState } from '@/store/store';
import { UserType } from '@/types/user';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AdminDashboard = () => {
  const { users, isLoading, isError } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAdminUsers());
  }, [dispatch]);
  return (
    <div className='p-5'>
      <h2 className='text-xl font-semibold'>All Users</h2>
      {isError && (
        <p className='my-10 animate-pulse text-red-500'>
          Something went wrong getting user lists
        </p>
      )}
      {!isLoading && Array.isArray(users) && users.length === 0 && (
        <p className='my-10 animate-pulse text-black'>No User Item</p>
      )}
      {/* users here  */}
      <div className='my-10 w-full overflow-x-auto'>
        {!isError && !isLoading && Array.isArray(users) && users.length > 0 && (
          <table className='w-full overflow-x-scroll'>
            <thead>
              <tr className='bg-neutral-200'>
                <td className='p-4 font-bold'>Name</td>
                <td className='p-4 font-bold'>Email</td>
                <td className='p-4 font-bold'>Role</td>
              </tr>
            </thead>
            {isLoading && <p>Loading...</p>}
            {!isError && !isLoading && Array.isArray(users) && (
              <tbody>
                {users.map((user: UserType) => (
                  <tr
                    key={user._id}
                    className='transition-all hover:bg-neutral-200/50'
                  >
                    <td className='border p-2'>{user.name}</td>
                    <td className='border p-2'>{user.email}</td>
                    <td className='border p-2'>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
