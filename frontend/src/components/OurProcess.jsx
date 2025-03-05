import { useEffect, useState } from 'react';
import ProcessStep from './shared/ProcessStep'
import axios from 'axios';
import { base_url } from '../config/config';

const OurProcess = () => {
  const [processSteps, setProcessSteps] = useState([])
  const fetchData = async ()=>{
    try {
      let res = await axios.get(`${base_url}/process`)
      if (res.status === 200) {
        setProcessSteps(res.data)
      }
    } catch (error) {
      console.log("error", error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
    <section>
    <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
      Our Process
    </h2>
    <p className="text-gray-600 text-center mb-12">
      Our Booking Process Is Very Simple And Easy, By Following The Steps
      Mentioned Below, You Can Book Removals Services.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processSteps?.map((step, index) => (
        <ProcessStep
          key={index}
          number={index + 1}
          title={step.processName}
          description={step.description}
        />
      ))}
    </div>
  </section>
  </div>
  )
}

export default OurProcess