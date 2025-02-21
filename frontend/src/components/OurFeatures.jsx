import { Clock, DollarSign, Globe, HeadphonesIcon } from 'lucide-react';
import FeatureCard from './shared/FeatureCard'

const OurFeatures = () => {
    const features = [
        {
          icon: Clock,
          title: "Free Booking",
          description:
            "Free the booking of your removal in no time, we work 24/7, providing same-day service with no time limit.",
        },
        {
          icon: DollarSign,
          title: "Affordable Pricing",
          description:
            "UK Mover provides market-proper services we serve is customer's satisfaction.",
        },
        {
          icon: Globe,
          title: "International Moves",
          description:
            "Move like International moves are done with UK Mover, just have a call to us and we make sure you are safe.",
        },
        {
          icon: HeadphonesIcon,
          title: "24/7 Service",
          description:
            "UK Mover provides road service to help you 24/7 with your concerns. Available any time of your services.",
        },
        {
          icon: HeadphonesIcon,
          title: "24/7 Service",
          description:
            "UK Mover provides road service to help you 24/7 with your concerns. Available any time of your services.",
        },
      ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">
         <section>
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
          Our Features
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Delivering Convenient And Great Free Removal Services To Give Our
          Customers & Make Reliable And Satisfactory Experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default OurFeatures