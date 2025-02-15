import React from 'react';
import { Trash2, Edit, PlusCircle } from 'lucide-react';

function CarsManage() {
  const cars = [
    { id: 1, name: 'Audi A4', type: 'Sedan', status: 'Available' },
    { id: 2, name: 'Toyota Corolla', type: 'Sedan', status: 'Rented' },
    { id: 3, name: 'Ford Explorer', type: 'SUV', status: 'Available' }
  ];

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Manage Cars</h1>
      <button className='mb-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
        <PlusCircle size={18} /> Add Car
      </button>
      <div className='bg-white p-4 rounded-lg shadow'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='p-3 text-left'>Car Name</th>
              <th className='p-3 text-left'>Type</th>
              <th className='p-3 text-left'>Status</th>
              <th className='p-3 text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id} className='border-b'>
                <td className='p-3'>{car.name}</td>
                <td className='p-3'>{car.type}</td>
                <td className='p-3'>{car.status}</td>
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

export default CarsManage;