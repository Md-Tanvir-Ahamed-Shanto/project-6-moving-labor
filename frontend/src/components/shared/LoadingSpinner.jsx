const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-[#6B8EB3] border-t-[#0A4B8F] animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;