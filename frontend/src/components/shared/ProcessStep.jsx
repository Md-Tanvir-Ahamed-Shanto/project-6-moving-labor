/* eslint-disable react/prop-types */
const ProcessStep = ({ number, title, description }) => (
    <div className="flex bg-gray-50 border hover:shadow-md items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  export default ProcessStep