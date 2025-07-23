import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import PropertiesSection from "../Components/PropertiesSection"
import PseudoNavBar from "../Components/PseudoNavBar"
import SemiFooterSection from "../Components/SemiFooter"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 font-robotoflex">
      {/* <Navbar/> */}
      <PseudoNavBar />
      <HeroSection />
      <PropertiesSection />
      <SemiFooterSection />
    </div>
  )
}

export default LandingPage
