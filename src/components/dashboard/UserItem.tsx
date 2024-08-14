import { fetchSuperAdminUsers } from '@/api/user';
import { AppDispatch } from '@/store/store';
import { UserItemProps } from '@/types/user';
import axios from '@/utils/axios';
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  // handle user delete
  const handleUserDelete = async (email: string) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this user?',
    );
    try {
      if (confirmDelete) {
        const res = await axios.delete(`/super-admin/user/${email}`);
        if (res.status === 204) {
          toast.success('User deleted successfully');
          dispatch(fetchSuperAdminUsers());
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // update user
  const handleUpdateUser = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    email: string,
  ) => {
    try {
      const res = await axios.put(`/super-admin/user/${email}`, {
        role: e.target.value,
      });
      if (res.data.status === 200) {
        toast.success('User updated successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className='transition-all hover:bg-neutral-200/50'>
      <td className='border p-2'>{user.name}</td>
      <td className='border p-2'>{user.email}</td>
      <td className='border p-2'>
        <select
          name='role'
          id='role'
          className='input'
          defaultValue={user.role}
          onChange={(e) => handleUpdateUser(e, user.email)}
        >
          <option value='admin'>Admin</option>
          <option value='user'>User</option>
        </select>
      </td>
      <td className='border p-2'>
        <MdDelete
          onClick={() => handleUserDelete(user.email)}
          className='ml-5 cursor-pointer text-xl'
        />
      </td>
    </tr>
  );
};

export default UserItem;
