const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-[#0A4B8F] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Our Company</h1>
          <p className="text-center mt-4 text-lg">Your Trusted Moving Partner Since 2010</p>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A4B8F] mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Founded in 2010, our moving company has been dedicated to providing exceptional moving services
            to customers across the UK. What started as a small local operation has grown into a trusted
            name in the moving industry, serving both residential and commercial clients.
          </p>
          <p className="text-gray-700">
            With over a decade of experience, we&apos;ve helped thousands of families and businesses
            make smooth transitions to their new locations, always maintaining our commitment to
            quality, reliability, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A4B8F] mb-8">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every move, ensuring your belongings are handled with the utmost care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">Count on us to be there when you need us, with transparent pricing and punctual service.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We go above and beyond to meet your moving needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0A4B8F] mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#0A4B8F] mr-2">✓</span>
                  <span>Fully insured and licensed moving services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0A4B8F] mr-2">✓</span>
                  <span>Experienced and professional moving team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0A4B8F] mr-2">✓</span>
                  <span>Modern fleet of well-maintained vehicles</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#0A4B8F] mr-2">✓</span>
                  <span>Competitive and transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0A4B8F] mr-2">✓</span>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0A4B8F] mr-2">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;