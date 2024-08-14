import { UserItemProps } from '@/types/user';
import React from 'react';

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  // handle user delete
  const handleUserDelete = (userId: string) => {};

  return (
    <tr className='transition-all hover:bg-neutral-200/50'>
      <td className='border p-2'>{user.name}</td>
      <td className='border p-2'>{user.email}</td>
      <td className='border p-2'>{user.role}</td>
    </tr>
  );
};

export default UserItem;
