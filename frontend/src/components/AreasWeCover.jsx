import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { base_url } from "../config/config"
import LoadingSpinner from './shared/LoadingSpinner';

const AreasWeCover = () => {
  const [areas, setAreas] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchAreas = async () => {
    try {
      let res = await axios.get(`${base_url}/coverage`)
      if (res.status === 200) {
        setAreas(res.data)
      }
    } catch (error) {
      console.log("error", error)
    } finally {
      setLoading(false)
    }
  };
  useEffect(()=>{
    fetchAreas()
  },[])
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#0A4B8F] mb-8">
        Areas We Cover
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {areas?.map((area, index) => (
          <div
            key={index}
            className="bg-[#6B8EB3] text-white py-3 px-4 rounded flex items-center justify-center"
          >
            <MapPin className="mr-2" />
            {area.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasWeCover;