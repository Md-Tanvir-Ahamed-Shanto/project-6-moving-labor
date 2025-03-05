import { useEffect, useState } from "react";
import PriceList from "./shared/PriceList";
import { base_url } from "../config/config";
import axios from "axios";

const OurPrices = () => {
  const [priceLists,setPriceLists] = useState([])
   const fetchData = async ()=>{
    try {
      let res = await axios.get(`${base_url}/item`)
      if(res.data){
        setPriceLists(res.data)
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
         <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Prices</h2>
        <p className="text-gray-600 mb-8">
          Now Shifting & House Removals Going Is Easy, Take Your Items Just
          Smartly By Getting The Work That Make It All Simple! We Can Do All
          Types Of Moves.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {priceLists.map((price, index) => (
            <PriceList key={index} title={price?.name} slug={price?.slug} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurPrices