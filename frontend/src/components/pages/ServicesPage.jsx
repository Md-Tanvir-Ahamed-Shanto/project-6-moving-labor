import OurFeatures from "../OurFeatures";
import OurProcess from "../OurProcess";

const ServicesPage = () => {
  const services = [
    {
      title: "House Removals",
      image: "https://ukmover.co.uk/images/House-removals.jpg",
      id: 1,
    },
    {
      title: "Flat Removals",
      image: "/images/flat-removals.jpg",
      id: 2,
    },
    {
      title: "Office Removals",
      image: "/images/office-removals.jpg",
      id: 3,
    },
    {
      title: "Furniture Removals",
      image: "/images/furniture-removals.jpg",
      id: 4,
    },
    {
      title: "Piano Removals",
      image: "/images/piano-removals.jpg",
      id: 5,
    },
    {
      title: "Parcels & Packaged Items",
      image: "/images/parcels.jpg",
      id: 6,
    },
    {
      title: "Cleaning Services",
      image: "/images/cleaning-services.jpg",
      id: 7,
    },
    {
      title: "Packing Material",
      image: "/images/packing-material.jpg",
      id: 8,
    },
    {
      title: "Packing Services",
      image: "/images/packing-services.jpg",
      id: 9,
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#0A4B8F] mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          UK Movers Are A Specialist Moving Company That Deal With All UK &
          European Moves, Packing & Unpacking, Cleaning And Furniture
          Dismantling & Reassembling Services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="border flex max-w-sm border-pink-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <button className="text-red-500 hover:text-red-600 font-medium">
                  Get Quote...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <OurProcess />
      <OurFeatures />
    </div>
  );
};

export default ServicesPage;
