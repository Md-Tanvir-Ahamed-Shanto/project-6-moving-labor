import axios from 'axios';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { base_uel } from '../../config/config';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [contact, setContact] = useState([]);
  console.log(contact)
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
    <footer className="bg-primary  text-white py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">UK MOVER</div>
            <p className="text-sm">
              A specialist moving company that deals with all UK & European moves, packing & unpacking, cleaning and furniture dismantling & reassembling services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-md hover:bg-red-700">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Services</h2>
            <div className='w-24 p-[1px] bg-red-500'></div>
            <div className="space-y-2">
              {[
                'Furniture Removals',
                'House Removals',
                'Piano Removals',
                'Packed/parcel items',
                'Cleaning Services',
                'Packing Services',
                'European Moves'
              ].map((service) => (
                <div key={service} className="flex items-center">
                  <span className="mr-2">»</span>
                  <a href="#" className="hover:text-red-400">{service}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Quick Links</h2>
            <div className='w-24 p-[1px] bg-red-500'></div>
            <div className="space-y-2">
              {[
                'Contacts Us',
                'Our Services',
                'Blog Posts',
                'Terms & Conditions',
                'GDPR Privacy',
                'Insurance Policies',
                'Inventory List'
              ].map((link) => (
                <div key={link} className="flex items-center">
                  <span className="mr-2">»</span>
                  <a href="#" className="hover:text-red-400">{link}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <div className='w-24 p-[1px] bg-red-500'></div>
            <div className="space-y-2">
              <p>Head Office: {contact?.address}</p>
              <p>{contact?.email}</p>
              {
               contact?.phone && (
                contact?.phone?.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))
               )
              }
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-blue-700 text-center">
          <p>© 2021 <span className="text-red-500">TASMOVER</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;