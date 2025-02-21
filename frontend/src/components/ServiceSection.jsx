/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Sofa,
  Home,
  Building2,
  Globe,
  Box as BoxIcon,
  Truck as TruckIcon,
  Clock,
  DollarSign,
  HeadphonesIcon,
  Computer,
  Piano,
  ParkingCircle,
  Bike,
  PawPrint,
} from "lucide-react";
import { BiCylinder, BiPackage, BiWorld } from "react-icons/bi";
import ProcessStep from "./shared/ProcessStep";
import FeatureCard from "./shared/FeatureCard";
import PriceList from "./shared/PriceList";
import OurProcess from "./OurProcess";
import OurFeatures from "./OurFeatures";

const ServiceSection = () => {
  const priceLists = [
    {
      icon: Sofa,
      title: "Furniture",
      slug: 'fur'
    },
    {
      icon: Home,
      title: "House",
    },
    {
      icon: Building2,
      title: "Flat",
    },
    {
      icon: Computer,
      title: "Office",
    },
    {
      icon: Piano,
      title: " Piano",
    },
    {
      icon: ParkingCircle,
      title: "Parcel",
    },
    {
      icon: BiPackage,
      title: "Packing Service",
    },
    {
        icon: BoxIcon,
        title:" Packing Material"
    },
    {
        icon: Bike,
        title:"Motor Bike"
    },
    {
        icon: BiCylinder,
        title: "Cleaning"
    },
    {
        icon: PawPrint,
        title:"Pet Removals"
    },
    {
        icon: BiWorld,
        title: "Other"
    }
  ];

  

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
      {/* Our Prices Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Prices</h2>
        <p className="text-gray-600 mb-8">
          Now Shifting & House Removals Going Is Easy, Take Your Items Just
          Smartly By Getting The Work That Make It All Simple! We Can Do All
          Types Of Moves.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {priceLists.map((price, index) => (
            <PriceList key={index} Icon={price?.Icon} title={price?.title} slug={price?.slug} />
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <OurProcess />

      {/* Our Features Section */}
     <OurFeatures />
    </div>
  );
};

export default ServiceSection;
