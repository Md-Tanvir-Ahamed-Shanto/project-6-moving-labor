/* eslint-disable react/prop-types */
const FeatureCard = ({ Icon, title, description }) => (
  <div className="text-center border bg-gray-50 hover:shadow-md p-6">
    <div className="inline-block p-3 bg-red-500 rounded-lg mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default FeatureCard;
