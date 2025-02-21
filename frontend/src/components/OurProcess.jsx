import ProcessStep from './shared/ProcessStep'

const OurProcess = () => {
    
  const processSteps = [
    {
      title: "Book Services",
      description:
        "Your service booking task has never been so easy, just call us or fill up the rest of the page or go to the online page and book the services.",
    },
    {
      title: "Packing",
      description:
        "Packing packing your items, freight is difficult. Some of unpacking service for furniture's packing Crate packing If you have the right help, this can all be less daunting service.",
    },
    {
      title: "Safely Moving",
      description:
        "We all have encountered problems during Moving. And want to ignore these fears and safely deliver any damage. We will give you trust.",
    },
    {
      title: "Doorstep Delivery",
      description:
        "Are you worried about your delivery? UK Mover always delivers the items of your delivery at your doorstep next to time like you've not felt.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
    <section>
    <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
      Our Process
    </h2>
    <p className="text-gray-600 text-center mb-12">
      Our Booking Process Is Very Simple And Easy, By Following The Steps
      Mentioned Below, You Can Book Removals Services.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processSteps.map((step, index) => (
        <ProcessStep
          key={index}
          number={index + 1}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  </section>
  </div>
  )
}

export default OurProcess