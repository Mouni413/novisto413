import './index.css'

import NavBarWithDropDown from '../NavBarWithDropDown'

import TransitionComponent from '../TransitionComponent'

import Automation from '../Automation'

import SustainableJourney from '../SustainableJourney'

import PersonsCarousel from '../PersonsCarousel'

import ResourceMain from '../ResourceMain'

import Footer from '../Footer'

import NavBottom from '../NavBottom'

const Home = () => (
  <div className="home-body-container">
    <NavBarWithDropDown />
    <NavBottom />
    <div className="companies-work-with-container">
      <h1 className="working-companies-heading">Companies We Work With</h1>
      <TransitionComponent />
    </div>
    <Automation />
    <SustainableJourney />
    <PersonsCarousel />
    <ResourceMain />
    <Footer />
  </div>
)

export default Home
