import { Truck, Plane, Ship } from 'lucide-react';

const TransportServices = () => {
  const services = [
    {
      icon: Truck,
      title: "Road Way",
      description: "Moving from country to country or city to city by road, you are at the right place."
    },
    {
      icon: Plane,
      title: "Air Way",
      description: "Want to move items urgently? UK Mover has the best reputation in air cargo."
    },
    {
      icon: Ship,
      title: "Ocean Way",
      description: "If you want to move inter-continentally, UK Mover is the best solution."
    }
  ];

  return (
    <div className="bg-primary w-full p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-dashed border-white/30 rounded-lg p-6 flex flex-col items-center text-center">
              <service.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white text-xl font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-white/90 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportServices;