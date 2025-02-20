/* eslint-disable react/prop-types */
const StatisticCard = ({ number, title, description }) => (
  <div className="text-center">
    <div className="text-red-600 text-4xl font-bold mb-2">{number}</div>
    <h3 className="text-gray-800 text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default StatisticCard;
