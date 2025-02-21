import { MapPin } from 'lucide-react';

const AreasWeCover = () => {
  const areas = [
    'Sydenham', 'Balham', 'Croydon', 'Earlsfield',
    'Kingston Upon', 'Mitcham', 'Morden', 'New Malden',
    'Norbiton', 'Wimbledon', 'Gatwick', 'Redhill',
    'Sevenoaks', 'Tunbridge', 'West Sussex', 'Crawley',
    'Rochester', 'Kent', 'Canterbury', 'Folkestone',
    'Dover', 'Deal', 'Margate', 'Isle Of Sheppey'
  ];

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#0A4B8F] mb-8">
        Areas We Cover
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-[#6B8EB3] text-white py-3 px-4 rounded flex items-center justify-center"
          >
            <MapPin className="mr-2" />
            {area}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreasWeCover;