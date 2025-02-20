
import { ClipboardList, Package, Truck, Home } from 'lucide-react';

const MovingProcess = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "BOOK YOUR ORDER",
      description: "Booking a removal job on our website is just a piece of cake. Simply put your moving information and moving items list, and get an instant price.",
      borderColor: "border-blue-600"
    },
    {
      icon: Package,
      title: "PACK YOUR THINGS",
      description: "Not sure about the best way to pack your stuff? Don't need to worry about packing we have a specialist packer's team, a checklist and guidelines on how to get the job done.",
      borderColor: "border-red-600"
    },
    {
      icon: Truck,
      title: "MOVE YOUR THINGS",
      description: "Want to move your items, but don't want to get tired? We are here, we can move your items with ease and safety, just book your job and sit back, UK Mover will do the rest.",
      borderColor: "border-blue-600"
    },
    {
      icon: Home,
      title: "DELIVER YOUR THINGS",
      description: "Do you want to deliver items by those whom you can trust? You are at the right place, we will deliver all your items without missing any items, more efficiently and quickly.",
      borderColor: "border-red-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-6 rounded-lg relative group hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <step.icon className="w-12 h-12 text-gray-600" />
            </div>

            {/* Title */}
            <h3 className="text-center mb-4 font-bold">
                <span className="text-gray-800 group-hover:text-red-600">{step.title}</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center text-sm">
              {step.description}
            </p>

            {/* Bottom Corner Accent */}
            <div className={`absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 ${step.borderColor} rounded-br-lg`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingProcess;