import { useEffect, useState } from "react";
import { base_uel } from "../../config/config";
import axios from "axios";

const ContactPage = () => {
  const [contact, setContact] = useState([]); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };
  const fetchData = async ()=>{
    try {
      const res = await axios.get(`${base_uel}/contact`)
      setContact(res.data[0])
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[]);

  return (
    <div className="w-full">
      {/* Contact Info Section */}
      <div className="bg-[#0A4B8F] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Address */}
            <div className="border border-white/20 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="mb-1">Head Office: {contact?.address}</p>
            </div>

            {/* Phone */}
            <div className="border border-white/20 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              {
               contact?.phone && (
                contact?.phone?.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))
               )
              }
            </div>

            {/* Email */}
            <div className="border border-white/20 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
              {
               contact?.email && (
                contact?.email?.map((email, index) => (
                  <p key={index}>{email}</p>
                ))
               )
              }
            </div>
          </div>
        </div>
      </div>

      {/* Map and Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Google Map */}
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7685364967407!2d-0.15097548422799032!3d51.45451097962614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605c2b8915555%3A0x7f1e7e5c1a83c699!2s8%20Deer%20Park%20Rd%2C%20London%20SW19%203TL!5e0!3m2!1sen!2suk!4v1645794125018!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A4B8F] mb-6">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A4B8F]"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A4B8F]"
              />
              <input
                type="text"
                placeholder="Enter Your Subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A4B8F]"
              />
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0A4B8F]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0A4B8F] text-white px-8 py-3 rounded-lg hover:bg-[#083968] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;