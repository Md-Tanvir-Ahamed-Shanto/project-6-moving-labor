import  { useState } from 'react';
import { FaUsers, FaTruck, FaChartLine, FaCalendarAlt, FaCog } from 'react-icons/fa';
import Contact from './Contact';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Total contact', value: '156', icon: <FaCalendarAlt /> },
    { title: 'Active Services', value: '8', icon: <FaTruck /> },
    { title: 'Total Customers', value: '324', icon: <FaUsers /> },
    { title: 'Monthly Revenue', value: '£15,680', icon: <FaChartLine /> },
  ];

  const recentcontact = [
    { id: 1, customer: 'John Doe', service: 'House Removal', date: '2024-02-20', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', service: 'Office Removal', date: '2024-02-19', status: 'Completed' },
    { id: 3, customer: 'Mike Johnson', service: 'Piano Moving', date: '2024-02-18', status: 'In Progress' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#0A4B8F] text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <nav className="mt-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'dashboard' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaChartLine className="mr-3" /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'contact' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaCalendarAlt className="mr-3" /> Contact
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'services' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaTruck className="mr-3" /> Services
          </button>
          <button
            onClick={() => setActiveTab('customers')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'customers' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaUsers className="mr-3" /> Customers
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'settings' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaCog className="mr-3" /> Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500">{stat.title}</p>
                      <p className="text-2xl font-bold mt-2">{stat.value}</p>
                    </div>
                    <div className="text-[#0A4B8F] text-2xl">
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent contact Table */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Recent contact</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left bg-gray-50">
                      <th className="p-3">ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Service</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentcontact.map((booking) => (
                      <tr key={booking.id} className="border-t">
                        <td className="p-3">{booking.id}</td>
                        <td className="p-3">{booking.customer}</td>
                        <td className="p-3">{booking.service}</td>
                        <td className="p-3">{booking.date}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="p-3">
                          <button className="text-blue-600 hover:text-blue-800">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Other tab contents can be added here */}
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Management</h2>
           <Contact />
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Services Management</h2>
            {/* Add services management content */}
          </div>
        )}

        {activeTab === 'customers' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Customer Management</h2>
            {/* Add customer management content */}
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            {/* Add settings content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;