import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaCalendar,
  FaBriefcase,
} from "react-icons/fa";
import axios from "axios";
import { base_uel } from "../../config/config";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    experience: "",
    availability: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${base_uel}/labor`, formData);
      if (response.data) {
        alert("Labor Registration Succesfully !");
        setFormData({
          fullName: "",
          email: "",
          address: "",
          phone: "",
          experience: "",
          availability: "",
        });
      }
    } catch (err) {
      console.log("Signup Error", err);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md md:max-w-2xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Labor Registration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account to join our labor force
          </p>
        </div>

        <form className="mt-8  space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div className="rounded-md  shadow-sm flex flex-col gap-2">
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="fullName"
                required
                className="appearance-none rounded-none relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#0A4B8F] focus:border-[#0A4B8F] focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                required
                className="appearance-none rounded-none relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0A4B8F] focus:border-[#0A4B8F] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="phone"
                required
                className="appearance-none rounded-none relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0A4B8F] focus:border-[#0A4B8F] focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaBriefcase className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="experience"
                required
                className="appearance-none rounded-none relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0A4B8F] focus:border-[#0A4B8F] focus:z-10 sm:text-sm"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <FaCalendar className="absolute top-3 left-3 text-gray-400" />
              <select
                name="availability"
                required
                className="appearance-none rounded-none relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0A4B8F] focus:border-[#0A4B8F] focus:z-10 sm:text-sm"
                value={formData.availability}
                onChange={handleChange}
              >
                <option value="">Select Availability</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="weekends">Weekends Only</option>
              </select>
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="address"
                name="address"
                required
                className="appearance-none rounded-none relative block w-full px-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0A4B8F] focus:border-[#0A4B8F] focus:z-10 sm:text-sm"
                placeholder="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0A4B8F] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A4B8F]"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
