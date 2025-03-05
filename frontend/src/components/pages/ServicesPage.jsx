import axios from "axios";
import OurFeatures from "../OurFeatures";
import OurProcess from "../OurProcess";
import { base_url } from "../../config/config";
import { useEffect, useState } from "react";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
 
  const fetchData = async  ()=>{
    try {
      let res = await axios.get(`${base_url}/service`)
      if(res.data){
        setServices(res.data)
      }
    } catch (error) {
      console.log("error", error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#0A4B8F] mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          UK Movers Are A Specialist Moving Company That Deal With All UK &
          European Moves, Packing & Unpacking, Cleaning And Furniture
          Dismantling & Reassembling Services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="border flex max-w-sm border-pink-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <button className="text-red-500 hover:text-red-600 font-medium">
                  Get Quote...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OurProcess />
      <OurFeatures />
    </div>
  );
};

export default ServicesPage;
