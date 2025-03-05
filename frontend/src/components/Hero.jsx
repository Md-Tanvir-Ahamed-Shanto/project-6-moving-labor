import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import axios from "axios";
import { base_url } from "../config/config.js";

const Hero = () => {
  const [selectedMove, setSelectedMove] = useState("");
  const [contact, setContact] = useState([]);
  const [heroContent, setHeroContent] = useState([]);
  const [formData, setFormData] = useState({
    movingType: "",
    description: "",
    movingFrom: "",
    movingTo: "",
    email: "",
    phone: ""
  });

  const fetchData = async () => {
    try {
      const res = await axios.get(`${base_url}/contact`);
      setContact(res?.data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchHeroContent = async () => {
    try {
      const response = await axios.get(`${base_url}/hero`);
      setHeroContent(response.data);
    } catch (error) {
      console.error("Error fetching hero content:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchHeroContent();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingData = {
        ...formData,
        movingType: selectedMove
      };
      const response = await axios.post(`${base_url}/booking`, bookingData);
      if (response.status === 201) {
        alert("Booking submitted successfully!");
        setSelectedMove("");
        setFormData({
          movingType: "",
          description: "",
          movingFrom: "",
          movingTo: "",
          email: "",
          phone: ""
        });
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="relative min-h-[600px] bg-blue-900/80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroContent?.[0]?.imageUrl}
          alt="Moving van background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/75 to-blue-900/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col gap-8 md:gap-0 md:flex-row justify-between z-10 container mx-auto px-4 pt-8">
        <div className="w-full md:ml-28">
          {/* Main Content */}
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {heroContent?.[0]?.title}
            </h1>
            <p className="text-xl md:text-2xl">{heroContent?.[0]?.content}</p>
          </div>

          {/* Moving Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4">
            <select
              className="w-full p-4 rounded text-gray-600"
              value={selectedMove}
              onChange={(e) => setSelectedMove(e.target.value)}
              required
            >
              <option value="">What are you moving..?</option>
              <option value="house">House</option>
              <option value="office">Office</option>
              <option value="furniture">Furniture</option>
              <option value="bike">Bike</option>
              <option value="packaged">Packaged Item</option>
              <option value="music">Music Instroment</option>
            </select>
            <div className="w-full">
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Give a list What are you moving..." 
                className="w-full p-2 h-28 rounded" 
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="movingFrom"
                  value={formData.movingFrom}
                  onChange={handleInputChange}
                  placeholder="Moving From"
                  className="w-full p-4 pl-12 rounded"
                  required
                />
              </div>
              <div className="relative">
                <Navigation
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="movingTo"
                  value={formData.movingTo}
                  onChange={handleInputChange}
                  placeholder="Moving To"
                  className="w-full p-4 pl-12 rounded"
                  required
                />
              </div>
              <div className="relative">
                <Navigation
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email Address"
                  className="w-full p-4 pl-12 rounded"
                  required
                />
              </div>
              <div className="relative">
                <Navigation
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className="w-full p-4 pl-12 rounded"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-blue-900 font-bold py-4 rounded hover:bg-gray-100 transition-colors"
            >
              Booking
            </button>
          </form>
        </div>
        <div className="w-full">
          {/* Contact Header */}
          <div className="flex justify-center md:mt-24 gap-4 mb-12">
            {contact?.phone?.length > 0 && (
              <a
                href={`tel:${contact?.phone?.[0]}`}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <Phone size={20} />
                <span>{contact?.phone && contact?.phone[0]}</span>
              </a>
            )}
            <a
              href={`mailto:${contact?.email?.[0]}`}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Mail size={20} />
              <span>{contact?.email && contact?.email[0]}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
