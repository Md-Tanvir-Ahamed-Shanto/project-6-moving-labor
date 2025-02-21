import OurProcess from "./OurProcess";
import OurFeatures from "./OurFeatures";
import OurPrices from "./OurPrices";

const ServiceSection = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
     <OurPrices />
      <OurProcess />
     <OurFeatures />
    </div>
  );
};

export default ServiceSection;
