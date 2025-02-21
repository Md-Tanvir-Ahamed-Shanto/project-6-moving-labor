import TransportServices from "../TransportServices"
import Hero from "../Hero"
import Landing from "../Landing"
import MovingProcess from "../MovingProcess"
import ServiceSection from "../ServiceSection"
import CompanyStrengths from "../CompanyStrengths"
import AreasWeCover from "../AreasWeCover"

const HomePage = () => {
  return (
    <div className="w-full h-auto">
      <Hero />
      <TransportServices />
      <Landing />
      <MovingProcess />
      <ServiceSection />
      <CompanyStrengths />
      <AreasWeCover />
      <h1>Home Page</h1>
    </div>
  )
}

export default HomePage