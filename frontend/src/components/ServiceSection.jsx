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

  const processSteps = [
    {
      title: "Book Services",
      description:
        "Your service booking task has never been so easy, just call us or fill up the rest of the page or go to the online page and book the services.",
    },
    {
      title: "Packing",
      description:
        "Packing packing your items, freight is difficult. Some of unpacking service for furniture's packing Crate packing If you have the right help, this can all be less daunting service.",
    },
    {
      title: "Safely Moving",
      description:
        "We all have encountered problems during Moving. And want to ignore these fears and safely deliver any damage. We will give you trust.",
    },
    {
      title: "Doorstep Delivery",
      description:
        "Are you worried about your delivery? UK Mover always delivers the items of your delivery at your doorstep next to time like you've not felt.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Free Booking",
      description:
        "Free the booking of your removal in no time, we work 24/7, providing same-day service with no time limit.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "UK Mover provides market-proper services we serve is customer's satisfaction.",
    },
    {
      icon: Globe,
      title: "International Moves",
      description:
        "Move like International moves are done with UK Mover, just have a call to us and we make sure you are safe.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Service",
      description:
        "UK Mover provides road service to help you 24/7 with your concerns. Available any time of your services.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Service",
      description:
        "UK Mover provides road service to help you 24/7 with your concerns. Available any time of your services.",
    },
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
      <section>
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Our Process
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Our Booking Process Is Very Simple And Easy, By Following The Steps
          Mentioned Below, You Can Book Removals Services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>

      {/* Our Features Section */}
      <section>
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Our Features
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Delivering Convenient And Great Free Removal Services To Give Our
          Customers & Make Reliable And Satisfactory Experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
