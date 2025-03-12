import React from 'react';
import { Trash2, Edit } from 'lucide-react';

function UsersManage() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Mark Taylor', email: 'mark@example.com', role: 'User' }
  ];

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Manage Users</h1>
      <div className='bg-white p-4 rounded-lg shadow'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-3 text-left'>Name</th>
              <th className='p-3 text-left'>Email</th>
              <th className='p-3 text-left'>Role</th>
              <th className='p-3 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className='border-b'>
                <td className='p-3'>{user.name}</td>
                <td className='p-3'>{user.email}</td>
                <td className='p-3'>{user.role}</td>
                <td className='p-3 text-center flex justify-center gap-4'>
                  <button className='text-blue-600 hover:text-blue-800'>
                    <Edit size={18} />
                  </button>
                  <button className='text-red-600 hover:text-red-800'>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersManage;
