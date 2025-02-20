import StatisticCard from "./shared/StatisticCard";


const CompanyStrengths = () => {
  const statistics = [
    {
      number: "13+",
      title: "Years Of Trust",
      description: "Delivering Smiles Since 2008",
    },
    {
      number: "5000+",
      title: "Moves Annually",
      description: "Happily Acrosss The World",
    },
    {
      number: "2+",
      title: "Million Sq.Feet",
      description: "Warehousing Space",
    },
    {
      number: "300+",
      title: "Trained Manpower",
      description: "Makes Your Move Safe & On Time",
    },
    {
      number: "20+",
      title: "Branches In UK",
      description:
        "To Cover 69+ Destinations Nationally & 182 Countries Globally",
    },
    {
      number: "100+",
      title: "Vehicles",
      description: "For Every Segment And Needs",
    },
  ];

  return (
    <div className="w-full bg-gray-50">

    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Strengths, Which Makes Us
        </h2>
        <p className="text-xl text-gray-600">
          The Most Preferable Moving Brand
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {statistics.map((stat, index) => (
          <StatisticCard
            key={index}
            number={stat.number}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
    </div>
          
    </div>
  );
};

export default CompanyStrengths;
