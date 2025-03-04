import TransportServices from "../TransportServices"
import Hero from "../Hero"
import Landing from "../Landing"
import MovingProcess from "../MovingProcess"
import ServiceSection from "../ServiceSection"
import CompanyStrengths from "../CompanyStrengths"
import AreasWeCover from "../AreasWeCover"
import BlogSection from "../BlogSection"

const HomePage = () => {
  return (
    <div className="w-full h-auto">
      <Hero />
      <TransportServices />
      <Landing />
      <MovingProcess />
      <ServiceSection />
      <BlogSection />
      <CompanyStrengths />
      <AreasWeCover />
    </div>
  )
}

export default HomePage