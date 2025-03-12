import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings, Users, Car } from 'lucide-react';

function AdminPanel() {
  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <aside className='w-64 bg-gray-900 text-white p-6 min-h-screen'>
        <h1 className='text-2xl font-bold mb-6'>Admin Panel</h1>
        <nav className='flex flex-col gap-4'>
          <Link to='/admin/dashboard' className='flex items-center gap-2 p-2 hover:bg-gray-700 rounded'>
            <Home size={20} /> Dashboard
          </Link>
          <Link to='/admin/users' className='flex items-center gap-2 p-2 hover:bg-gray-700 rounded'>
            <Users size={20} /> Users
          </Link>
          <Link to='/admin/cars' className='flex items-center gap-2 p-2 hover:bg-gray-700 rounded'>
            <Car size={20} /> Cars
          </Link>
          <Link to='/admin/settings' className='flex items-center gap-2 p-2 hover:bg-gray-700 rounded'>
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-6 bg-gray-100'>
        <h2 className='text-3xl font-bold'>Welcome to Admin Dashboard</h2>
        <p className='mt-2 text-gray-600'>Manage users, cars, and settings here.</p>
      </main>
    </div>
  );
}

export default AdminPanel;
