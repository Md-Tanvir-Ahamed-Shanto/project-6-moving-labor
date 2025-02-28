import { useState, useEffect } from 'react';
import { FaUsers, FaTruck, FaChartLine, FaCalendarAlt, FaCog } from 'react-icons/fa';
import axios from 'axios';
import Contact from './Contact';
import Services from './Services';
import Customers from './Customers';
import AboutUs from './AboutUs';
import Messages from './Messages';
import Hero from './Hero';
import Coverage from './Coverage';
import Blog from './Blog';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [statistics, setStatistics] = useState([]);
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    fetchStatistics();
    fetchRecentBookings();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/statistic');
      setStatistics(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const fetchRecentBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/booking');
      setRecentBookings(response.data.slice(0, 5)); // Get only the 5 most recent bookings
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const stats = [
    { title: 'Total Bookings', value: statistics.length || '0', icon: <FaCalendarAlt /> },
    { title: 'Active Services', value: '8', icon: <FaTruck /> },
    { title: 'Total Customers', value: '324', icon: <FaUsers /> },
    { title: 'Monthly Revenue', value: '£15,680', icon: <FaChartLine /> },
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
            onClick={() => setActiveTab('hero')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'hero' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaCog className="mr-3" /> Hero
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'about' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaCog className="mr-3" /> About Us
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'messages' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaCog className="mr-3" /> Messages
          </button>
          <button
            onClick={() => setActiveTab('coverage')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'coverage' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaCog className="mr-3" /> Coverage
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center px-6 py-3 ${
              activeTab === 'blog' ? 'bg-blue-700' : 'hover:bg-blue-700'
            }`}
          >
            <FaCog className="mr-3" /> Blog
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

            {/* Recent Bookings Table */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Bookings</h3>
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
                    {recentBookings.map((booking) => (
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
            <Services />
          </div>
        )}

        {activeTab === 'customers' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Customer Management</h2>
            <Customers />
          </div>
        )}
        {activeTab === 'hero' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Hero Management</h2>
            <Hero />
          </div>
        )}
        {activeTab === 'about' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">About Us Management</h2>
            <AboutUs />
          </div>
        )}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Messages Management</h2>
            <Messages />
          </div>
        )}
        {activeTab === 'coverage' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Coverage Areas Management</h2>
            <Coverage />
          </div>
        )}
        {activeTab === 'blog' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Blog Management</h2>
            <Blog />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;