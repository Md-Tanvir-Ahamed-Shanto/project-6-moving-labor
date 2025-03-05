import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../../config/config';

const Feature = () => {
  const [features, setFeatures] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentFeature, setCurrentFeature] = useState({
    featureName: '',
    description: '',
    iconUrl: ''
  });

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get(`${base_url}/feature`);
      setFeatures(response.data);
    } catch (error) {
      console.error('Error fetching features:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`${base_url}/feature/${currentFeature.id}`, currentFeature);
        alert('Feature updated successfully');
      } else {
        await axios.post(`${base_url}/feature`, currentFeature);
        alert('Feature created successfully');
      }
      fetchFeatures();
      setEditMode(false);
      setCurrentFeature({ featureName: '', description: '', iconUrl: '' });
    } catch (error) {
      alert('Operation failed');
      console.error('Error:', error);
    }
  };

  const handleEdit = (feature) => {
    setEditMode(true);
    setCurrentFeature(feature);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this feature?')) {
      try {
        await axios.delete(`${base_url}/feature/${id}`);
        alert('Feature deleted successfully');
        fetchFeatures();
      } catch (error) {
        alert('Failed to delete feature');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Features</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">featureName</label>
            <input
              type="text"
              name="featureName"
              value={currentFeature.featureName}
              onChange={(e) => setCurrentFeature({ ...currentFeature, featureName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={currentFeature.description}
              onChange={(e) => setCurrentFeature({ ...currentFeature, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Icon Url</label>
            <input
              type="text"
              name="iconUrl"
              value={currentFeature.iconUrl}
              onChange={(e) => setCurrentFeature({ ...currentFeature, iconUrl: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              placeholder="Enter iconUrl class or URL"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {editMode ? 'Update Feature' : 'Add Feature'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl text-blue-600 mb-4">
              <i className={feature.iconUrl}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.featureName}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(feature)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(feature.id)}
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

export default Feature;