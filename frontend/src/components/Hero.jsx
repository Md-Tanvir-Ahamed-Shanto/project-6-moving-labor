import { useState , useEffect } from 'react';
import { Phone, Mail, MapPin, Navigation } from 'lucide-react';
import axios from 'axios';
import {base_uel} from "../config/config.js"

const Hero = () => {
  const [selectedMove, setSelectedMove] = useState('');
  const [show,setShow] = useState('Manchester')
  const [contact, setContact] = useState([]);
  const fetchData = async ()=>{
    try {
      const res = await axios.get(`${base_uel}/contact`)
      setContact(res?.data[0])
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[]);
  const text = ['Manchester','Whatsapp','Hello Word','hello']

   useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * text.length);
      setShow(text[randomIndex]);
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, [])
  
  return (
    <div className="relative min-h-[600px] bg-blue-900/80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.move.org/app/uploads/2021/05/U-Haul-trucks.jpg" 
          alt="Moving van background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/75 to-blue-900/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col gap-8 md:gap-0 md:flex-row justify-between z-10 container mx-auto px-4 pt-8">
        <div className='w-full md:ml-28'>



        {/* Main Content */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            House Removals <span className="text-red-500">{show}</span>
          </h1>
          <p className="text-xl md:text-2xl">
            UK&apos;s best house removals, office removals, man and van<br />
            and european removals services.
          </p>
        </div>

        {/* Moving Form */}
        <div className="max-w-4xl mx-auto space-y-4">
          <select 
            className="w-full p-4 rounded text-gray-600"
            value={selectedMove}
            onChange={(e) => setSelectedMove(e.target.value)}
          >
            <option value="">What are you moving..?</option>
            <option value="house">House</option>
            <option value="office">Office</option>
            <option value="furniture">Furniture</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Moving From"
                className="w-full p-4 pl-12 rounded"
              />
            </div>
            <div className="relative">
              <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Moving To"
                className="w-full p-4 pl-12 rounded"
              />
            </div>
          </div>

          <button className="w-full bg-white text-blue-900 font-bold py-4 rounded hover:bg-gray-100 transition-colors">
            Instant Prices
          </button>
        </div>
        </div>
        <div className='w-full'>
            {/* Contact Header */}
        <div className="flex justify-center md:mt-24 gap-4 mb-12">
          <a href={`tel:${contact?.phone?.[0]}`} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
            <Phone size={20} />
            <span>
              {
                contact?.phone &&
                contact?.phone[0]
              }
            </span>
          </a>
          <a href={`mailto:${contact?.email?.[0]}`} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
            <Mail size={20} />
            <span>
              {
                contact?.email &&
                contact?.email[0]
              }
            </span>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;