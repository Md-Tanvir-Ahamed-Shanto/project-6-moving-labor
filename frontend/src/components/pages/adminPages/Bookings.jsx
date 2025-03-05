import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../../config/config';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${base_url}/booking`);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await axios.delete(`${base_url}/booking/${id}`);
        alert('Booking deleted successfully');
        fetchBookings();
      } catch (error) {
        alert('Failed to delete booking');
        console.error('Error:', error);
      }
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Moving Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.movingType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.movingFrom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.movingTo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{booking.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleViewDetails(booking)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for viewing booking details */}
      {showModal && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-4">Booking Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 font-medium">Moving Type</p>
                <p>{selectedBooking.movingType}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Items List</p>
                <p className="whitespace-pre-wrap">{selectedBooking.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 font-medium">Moving From</p>
                  <p>{selectedBooking.movingFrom}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Moving To</p>
                  <p>{selectedBooking.movingTo}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 font-medium">Email</p>
                  <p>{selectedBooking.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Phone</p>
                  <p>{selectedBooking.phone}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;