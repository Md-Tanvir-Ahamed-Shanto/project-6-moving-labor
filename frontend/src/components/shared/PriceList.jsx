import service from '../../../public/service.png'
/* eslint-disable react/prop-types */
const PriceList = ({title, className = "" }) => (
  <div className="border hover:cursor-pointer border-dashed flex flex-col justify-center items-center border-blue-400 p-4 rounded-lg hover:bg-blue-50 transition-colors">
    <img src={service} alt="service " className={`w-12 h-12 text-blue-600 ${className}`} />
    <h1 className="text-xl">{title}</h1>
  </div>
);

export default PriceList;
