const Landing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Welcome Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Welcome To UK MOVER
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A Specialist Moving Company That Deals With All UK & European Moves, Packing
          & Unpacking, Cleaning And Furniture Dismantling & Reassembling Services.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          {/* House Removals Section */}
          <div>
            <h2 className="text-3xl text-center font-semibold mb-4">
              House Removals <span className="text-red-600">London, UK</span>
            </h2>
            <p className="text-gray-700">
              Do you live in UK or surrounding area and looking to hire house removals company near you? 
              A company who can come pack and move all your goods to your new home? We at UK MOVER are 
              the best <span className="font-medium">House Removals London</span>, we can do all small 
              and large home removals, office removals, furniture removals or piano removals including 
              packing service as well as provide you with packing materials at the same time. If you need 
              house removals services in UK Call us today 0208 0048115.
            </p>
          </div>

          {/* Removals Company Section */}
          <div>
            <h2 className="text-3xl text-center font-semibold mb-4">
              House <span className="text-red-600">Removals Company</span> Near You
            </h2>
            <p className="text-gray-700">
              We have built a strong reputation as a removals company based with a high standard of 
              moving services, a man with van services and furniture removals services with professional 
              staff that is willing to help you at any time any where in London, UK. If you are searching 
              for a House Removals Company near you, then no need to worry just make a Call today on 
              0208 0048115 & Get discount offers for House removal services or &quot;Get Instant Quotation 
              for Your House Move and Book Online&quot;. If you have any queries about the moving you are 
              welcome to contact our representatives.
            </p>
          </div>

          {/* Packers & Movers Section */}
          <div>
            <h2 className="text-3xl text-center font-semibold mb-4">
              Packers & Movers <span className="text-gray-800">London, UK</span>
            </h2>
            <p className="text-gray-700">
              We turn the stressful task of house moving into a seamless and worry-free experience. 
              With our dedicated team of Packers & Movers and modern fleet, we are committed to 
              delivering top-quality service that exceeds your expectations. Let us take care of all 
              your packers and movers needs!
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-full">
          <img 
            src="https://ukmover.co.uk/images/our-vans-img.jpg" 
            alt="MOVER Van" 
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;