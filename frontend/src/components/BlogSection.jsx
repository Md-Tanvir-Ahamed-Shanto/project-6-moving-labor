import { useState, useEffect } from "react";
import axios from "axios";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog");
        setBlogs(response.data);
        const initialExpandedState = {};
        response.data.forEach(blog => {
          initialExpandedState[blog.id] = false;
        });
        setExpandedBlogs(initialExpandedState);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleContent = (blogId) => {
    setExpandedBlogs(prev => ({
      ...prev,
      [blogId]: !prev[blogId]
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <div className="text-gray-600">
                  {expandedBlogs[blog.id] ? (
                    <>
                      <p>{blog.content}</p>
                      <button
                        onClick={() => toggleContent(blog.id)}
                        className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{blog.content.substring(0, 150)}...</p>
                      <button
                        onClick={() => toggleContent(blog.id)}
                        className="text-blue-600 hover:text-blue-800 mt-2 font-medium"
                      >
                        Show More
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;