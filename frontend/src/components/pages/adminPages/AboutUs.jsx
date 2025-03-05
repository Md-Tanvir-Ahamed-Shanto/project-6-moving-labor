import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../../../config/config';

const AboutUs = () => {
  const [aboutUsContent, setAboutUsContent] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentContent, setCurrentContent] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchAboutUsContent();
  }, []);

  const fetchAboutUsContent = async () => {
    try {
      const response = await axios.get(`${base_url}/about-us`);
      setAboutUsContent(response.data);
    } catch (error) {
      console.error('Error fetching about us content:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`${base_url}/about-us/${currentContent.id}`, currentContent);
      } else {
        await axios.post(`${base_url}/about-us`, currentContent);
      }
      fetchAboutUsContent();
      setEditMode(false);
      setCurrentContent({ title: '', content: '' });
    } catch (error) {
      console.error('Error saving about us content:', error);
    }
  };

  const handleEdit = (content) => {
    setEditMode(true);
    setCurrentContent(content);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this content?')) {
      try {
        await axios.delete(`${base_url}/about-us/${id}`);
        fetchAboutUsContent();
      } catch (error) {
        console.error('Error deleting about us content:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={currentContent.title}
              onChange={(e) => setCurrentContent({ ...currentContent, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={currentContent.content}
              onChange={(e) => setCurrentContent({ ...currentContent, content: e.target.value })}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            {editMode ? 'Update' : 'Add'} Content
          </button>
        </div>
      </form>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {aboutUsContent.map((content) => (
                <tr key={content.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{content.title}</td>
                  <td className="px-6 py-4">
                    <div className="line-clamp-2">{content.content}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(content)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(content.id)}
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

export default AboutUs;