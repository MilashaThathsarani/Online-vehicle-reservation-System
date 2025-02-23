import React, { useState } from 'react';
import { FaTrash, FaEdit, FaSearch, FaTimes } from 'react-icons/fa';

function Bookings() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      date: '2025-02-17',
      time: '10:00 AM',
      driverName: 'Mike Johnson',
      status: 'Pending',
      pickupLocation: 'Colombo',
      dropLocation: 'Kandy',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      date: '2025-02-18',
      time: '2:00 PM',
      driverName: 'Alex Brown',
      status: 'Accepted',
      pickupLocation: 'Galle',
      dropLocation: 'Colombo',
    },
    // Add more sample bookings here
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Filter bookings based on search query
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.driverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.pickupLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.dropLocation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusChange = (id, newStatus) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updatedBookings);
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-[91vh] p-4 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Bookings</h2>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by Customer, Driver, Pickup, or Drop Location..."
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
            <tr className="bg-blue-900 text-white">
              <th className="px-4 py-3 text-left">Booking ID</th>
              <th className="px-4 py-3 text-left">Customer Name</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Driver Name</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Pickup Location</th>
              <th className="px-4 py-3 text-left">Drop Location</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                  <td className="border px-4 py-3">{booking.id}</td>
                  <td className="border px-4 py-3">{booking.customerName}</td>
                  <td className="border px-4 py-3">{booking.date}</td>
                  <td className="border px-4 py-3">{booking.time}</td>
                  <td className="border px-4 py-3">{booking.driverName}</td>
                  <td className="border px-4 py-3">
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                      className={`p-1 rounded ${getStatusColor(booking.status)}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="border px-4 py-3">{booking.pickupLocation}</td>
                  <td className="border px-4 py-3">{booking.dropLocation}</td>
                  <td className="border px-4 py-3">
                    <button
                      onClick={() => handleDelete(booking.id)}
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
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;