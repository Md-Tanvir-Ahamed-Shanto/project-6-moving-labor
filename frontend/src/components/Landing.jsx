import { useEffect, useState } from "react";
import AboutCard from "./shared/AboutCard";
import axios from "axios";
import { base_url } from "../config/config";

const Landing = () => {
  const [abouts, setAbouts] = useState([])
  const fetchAbouts = async () =>{
    try {
      let res = await axios.get(`${base_url}/about-us`)
      if(res.data){
        setAbouts(res.data)
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(()=>{
    fetchAbouts();
  },[])
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Welcome Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Welcome To Moving Nice
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A Specialist Moving Company That Deals With All UK & European Moves, Packing
          & Unpacking, Cleaning And Furniture Dismantling & Reassembling Services.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          {/* House Removals Section */}
          {
            abouts?.map((about, index) => (
              <AboutCard key={index} title={about.title} content={about.content} />
            ))
          }

        </div>

        {/* Image Section */}
        <div className="relative h-full">
          <img 
            src="https://ukmover.co.uk/images/our-vans-img.jpg" 
            alt="MOVER Van" 
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;