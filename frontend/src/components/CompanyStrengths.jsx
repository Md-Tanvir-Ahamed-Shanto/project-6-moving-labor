import { useEffect, useState } from "react";
import StatisticCard from "./shared/StatisticCard";
import axios from "axios";
import { base_url } from "../config/config";


const CompanyStrengths = () => {
  const [statistics, setStatistics] = useState([])

  const fetchData = async ()=>{
    try {
      let res = await axios.get(`${base_url}/statistic`)
      if (res.status === 200) {
        setStatistics(res.data)
      }
    } catch (error) {
      console.log("error",error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="w-full bg-gray-50">

    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Strengths, Which Makes Us
        </h2>
        <p className="text-xl text-gray-600">
          The Most Preferable Moving Brand
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {statistics.map((stat, index) => (
          <StatisticCard
            key={index}
            number={stat.value}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
    </div>
          
    </div>
  );
};

export default CompanyStrengths;
