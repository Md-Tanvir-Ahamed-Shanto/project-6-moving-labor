import axios from 'axios';
import FeatureCard from './shared/FeatureCard'
import { useEffect, useState } from 'react';
import { base_uel } from '../config/config';

const OurFeatures = () => {
  const [features, setFeatures] = useState([]);
const fetchFeatures = async () => {
    try {
      let res = await axios.get(`${base_uel}/feature`)
      if (res.status === 200) {
        setFeatures(res.data)
      }
    } catch (error) {
      console.log("error", error)
    } finally {
      // setLoading(false)
    }
  }
  useEffect(() => {
    fetchFeatures()
  }, [])
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
         <section>
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Our Features
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Delivering Convenient And Great Free Removal Services To Give Our
          Customers & Make Reliable And Satisfactory Experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features?.map((feature, index) => (
            <FeatureCard
              key={index}
              iconUrl={feature.iconUrl}
              featureName={feature.featureName}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurFeatures