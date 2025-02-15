import React from 'react';
import { Users, Car, Settings } from 'lucide-react';

function Dashboard() {
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-4 rounded-lg shadow flex items-center gap-4'>
          <Users size={40} className='text-blue-600' />
          <div>
            <h2 className='text-xl font-semibold'>Users</h2>
            <p className='text-gray-600'>Manage all registered users</p>
          </div>
        </div>

        <div className='bg-white p-4 rounded-lg shadow flex items-center gap-4'>
          <Car size={40} className='text-green-600' />
          <div>
            <h2 className='text-xl font-semibold'>Cars</h2>
            <p className='text-gray-600'>Manage available rental cars</p>
          </div>
        </div>

        <div className='bg-white p-4 rounded-lg shadow flex items-center gap-4'>
          <Settings size={40} className='text-red-600' />
          <div>
            <h2 className='text-xl font-semibold'>Settings</h2>
            <p className='text-gray-600'>Adjust system settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
