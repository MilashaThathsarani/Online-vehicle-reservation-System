import React, { useState } from 'react';
import { FaTrash, FaSearch, FaTimes } from 'react-icons/fa';

function Customer() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St, Colombo',
      email: 'john@example.com',
      phone: '0771234567',
      city: 'Colombo',
      nic: '987654321V',
      photo: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '456 Side Rd, Kandy',
      email: 'jane@example.com',
      phone: '0777654321',
      city: 'Kandy',
      nic: '123456789V',
      photo: 'https://via.placeholder.com/50',
    },
    // Add more sample customers here
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Filter customers based on search query
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.nic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="min-h-[91vh] p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Customer List</h2>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by Name, Email, Phone, City, or NIC..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 text-gray-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="px-4 py-3 text-left">Customer ID</th>
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Address</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Phone Number</th>
              <th className="px-4 py-3 text-left">Current City</th>
              <th className="px-4 py-3 text-left">NIC No</th>
              <th className="px-4 py-3 text-left">Customer Photo</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">{customer.id}</td>
                  <td className="px-4 py-3">{customer.name}</td>
                  <td className="px-4 py-3">{customer.address}</td>
                  <td className="px-4 py-3">{customer.email}</td>
                  <td className="px-4 py-3">{customer.phone}</td>
                  <td className="px-4 py-3">{customer.city}</td>
                  <td className="px-4 py-3">{customer.nic}</td>
                  <td className="px-4 py-3">
                    <img
                      src={customer.photo}
                      alt="Customer Photo"
                      className="w-10 h-10 object-cover rounded-full mx-auto"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-6 text-gray-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customer;