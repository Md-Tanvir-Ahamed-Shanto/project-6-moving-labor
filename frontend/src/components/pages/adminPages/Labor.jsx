import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_uel } from '../../../config/config';

const Labor = () => {
  const [labors, setLabors] = useState([]);
  const [selectedLabor, setSelectedLabor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchLabors();
  }, []);

  const fetchLabors = async () => {
    try {
      const response = await axios.get(`${base_uel}/labor`);
      setLabors(response.data);
    } catch (error) {
      console.error('Error fetching labors:', error);
    }
  };

  const handleViewDetails = (labor) => {
    setSelectedLabor(labor);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this labor application?')) {
      try {
        await axios.delete(`${base_uel}/labor/${id}`);
        alert('Labor application deleted successfully');
        fetchLabors();
      } catch (error) {
        alert('Failed to delete labor application');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-3">ID</th>
              <th className="p-3">Full Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Experience</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {labors.map((labor) => (
              <tr key={labor.id} className="border-t">
                <td className="p-3">{labor.id}</td>
                <td className="p-3">{labor.fullName}</td>
                <td className="p-3">{labor.email}</td>
                <td className="p-3">{labor.phone}</td>
                <td className="p-3">{labor.experience}</td>
                <td className="p-3">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewDetails(labor)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(labor.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {showModal && selectedLabor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Labor Application Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Full Name:</p>
                  <p>{selectedLabor.fullName}</p>
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>{selectedLabor.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>{selectedLabor.phone}</p>
                </div>
                <div>
                  <p className="font-semibold">Experience:</p>
                  <p>{selectedLabor.experience}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Address:</p>
                  <p>{selectedLabor.address}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Availability:</p>
                  <p>{selectedLabor.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Labor;