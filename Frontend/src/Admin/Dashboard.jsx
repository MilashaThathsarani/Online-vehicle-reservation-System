import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the bar chart
const customerGrowthData = [
  { month: 'Jan', customers: 100 },
  { month: 'Feb', customers: 150 },
  { month: 'Mar', customers: 200 },
  { month: 'Apr', customers: 300 },
  { month: 'May', customers: 400 },
  { month: 'Jun', customers: 500 },
];

function Dashboard() {
  // Sample data for the cards
  const numberOfDrivers = 25;
  const numberOfBookings = 120;
  const numberOfCustomers = 300;

  return (
    <div className="bg-white min-h-[91vh] rounded-lg p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-700">U</span>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        
        {/* Bookings Card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-950 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Number of Bookings
          </h2>
          <p className="text-3xl font-bold">{numberOfBookings}</p>
        </div>
 
        {/* Customers Card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-950 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Number of Customers
          </h2>
          <p className="text-3xl font-bold">{numberOfCustomers}</p>
        </div>

        {/* Drivers Card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-950 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Number of Drivers
          </h2>
          <p className="text-3xl font-bold">{numberOfDrivers}</p>
        </div>


      </div>

      {/* Bar Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Growth of Customers</h2>
        <p className="text-gray-600 mb-6">Monthly growth in the number of customers over the past 6 months.</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={customerGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 rounded-lg shadow-lg border">
                      <p className="font-semibold">{label}</p>
                      <p className="text-blue-600">{`Customers: ${payload[0].value}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Bar
              dataKey="customers"
              fill="url(#barGradient)"
              radius={[5, 5, 0, 0]}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8884d8" />
                <stop offset="100%" stopColor="#82ca9d" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-600">
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Dashboard;