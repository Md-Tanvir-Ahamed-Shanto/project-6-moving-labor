import { useState, useEffect } from 'react';
import axios from 'axios';

const Statistic = () => {
  const [statistics, setStatistics] = useState([]);
  const [formData, setFormData] = useState({
    value: '',
    title: '',
    description: ''
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/statistic');
      setStatistics(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching statistics:', error);
      setStatistics([]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/statistic/${editingId}`, formData);
        alert('Statistic updated successfully');
      } else {
        await axios.post('/api/statistic', formData);
        alert('Statistic created successfully');
      }
      setFormData({ value: '', title: '', description: '' });
      setEditingId(null);
      fetchStatistics();
    } catch (error) {
     alert('Operation failed');
      console.error('Error:', error);
    }
  };

  const handleEdit = (statistic) => {
    setFormData({
      value: statistic.value,
      title: statistic.title,
      description: statistic.description
    });
    setEditingId(statistic.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this statistic?')) {
      try {
        await axios.delete(`/api/statistic/${id}`);
    alert('Statistic deleted successfully');
        fetchStatistics();
      } catch (error) {
        alert('Failed to delete statistic');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Statistics</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Value</label>
            <input
              type="text"
              name="value"
              value={formData.value}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              rows="3"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {editingId ? 'Update Statistic' : 'Add Statistic'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statistics.map((statistic) => (
          <div key={statistic.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{statistic.title}</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">{statistic.value}</p>
            <p className="text-gray-600 mb-4">{statistic.description}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(statistic)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(statistic.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;