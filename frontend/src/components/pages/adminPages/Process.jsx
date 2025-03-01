import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_uel } from '../../../config/config';

const Process = () => {
  const [processes, setProcesses] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentProcess, setCurrentProcess] = useState({
    processName: '',
    description: '',
    icon: ''
  });

  useEffect(() => {
    fetchProcesses();
  }, []);

  const fetchProcesses = async () => {
    try {
      const response = await axios.get(`${base_uel}/process`);
      setProcesses(response.data);
    } catch (error) {
      console.error('Error fetching processes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`${base_uel}/process/${currentProcess.id}`, currentProcess);
        alert('Process updated successfully');
      } else {
        await axios.post(`${base_uel}/process`, currentProcess);
        alert('Process created successfully');
      }
      fetchProcesses();
      setEditMode(false);
      setCurrentProcess({ processName: '', description: '', icon: '' });
    } catch (error) {
      alert('Operation failed');
      console.error('Error:', error);
    }
  };

  const handleEdit = (process) => {
    setEditMode(true);
    setCurrentProcess(process);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this process?')) {
      try {
        await axios.delete(`${base_uel}/process/${id}`);
        alert('Process deleted successfully');
        fetchProcesses();
      } catch (error) {
        alert('Failed to delete process');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Processes</h2>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Process Name</label>
            <input
              type="text"
              name="processName"
              value={currentProcess.processName}
              onChange={(e) => setCurrentProcess({ ...currentProcess, processName: e.target.value })}
              className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={currentProcess.description}
              onChange={(e) => setCurrentProcess({ ...currentProcess, description: e.target.value })}
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
          {editMode ? 'Update Process' : 'Add Process'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {processes.map((process) => (
          <div key={process.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl text-blue-600 mb-4">
              <i className={process.icon}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{process.processName}</h3>
            <p className="text-gray-600 mb-4">{process.description}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(process)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(process.id)}
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

export default Process;