import { useState, useEffect } from 'react';
import axios from 'axios';

const Coverage = () => {
  const [coverageAreas, setCoverageAreas] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentArea, setCurrentArea] = useState({
    title: ''
  });

  useEffect(() => {
    fetchCoverageAreas();
  }, []);

  const fetchCoverageAreas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/coverage');
      setCoverageAreas(response.data);
    } catch (error) {
      console.error('Error fetching coverage areas:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:5000/api/coverage/${currentArea.id}`, currentArea);
      } else {
        await axios.post('http://localhost:5000/api/coverage', currentArea);
      }
      fetchCoverageAreas();
      setEditMode(false);
      setCurrentArea({ title: '' });
    } catch (error) {
      console.error('Error saving coverage area:', error);
    }
  };

  const handleEdit = (area) => {
    setEditMode(true);
    setCurrentArea(area);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this coverage area?')) {
      try {
        await axios.delete(`http://localhost:5000/api/coverage/${id}`);
        fetchCoverageAreas();
      } catch (error) {
        console.error('Error deleting coverage area:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Area Title</label>
            <input
              type="text"
              value={currentArea.title}
              onChange={(e) => setCurrentArea({ ...currentArea, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
              placeholder="Enter coverage area title"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {editMode ? 'Update' : 'Add'} Coverage Area
          </button>
        </div>
      </form>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coverageAreas.map((area) => (
                <tr key={area.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{area.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(area)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(area.id)}
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
    </div>
  );
};

export default Coverage;