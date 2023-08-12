import {Carousel} from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './index.css'

const PersonsCarousel = () => (
  <Carousel showIndicators showStatus={false} showThumbs={false}>
    <div className="person-1-background">
      <h1 className="person-heading">
        Confronting Escalating ESG <br />
        Requirements <br />
        around Esg
      </h1>
      <p className="person-description">- - - - - - - - -</p>
      <p className="person-description">
        As a public company we are facing demands around ESG disclosure,
        <br />
        Complex data collection and desire to improve our performance .As a
        <br />
        Technology based business,CAE is proud to be a launch partner for
        Novistos <br />
        AI driven ESG management platform
      </p>
    </div>
    <div className="person-2-background">
      <h1 className="person-heading">
        Confronting Escalating ESG <br />
        Requirements <br />
        around Esg
      </h1>
      <p className="person-description">- - - - - - - - -</p>
      <p className="person-description">
        As a public company we are facing demands around ESG disclosure,
        <br />
        Complex data collection and desire to improve our performance .As a
        <br />
        Technology based business,CAE is proud to be a launch partner for
        Novistos <br />
        AI driven ESG management platform
      </p>
    </div>
    <div className="person-3-background">
      <h1 className="person-heading">
        Confronting Escalating ESG <br />
        Requirements <br />
        around Esg
      </h1>
      <p className="person-description">- - - - - - - - -</p>
      <p className="person-description">
        As a public company we are facing demands around ESG disclosure,
        <br />
        Complex data collection and desire to improve our performance .As a
        <br />
        Technology based business,CAE is proud to be a launch partner for
        Novistos <br />
        AI driven ESG management platform
      </p>
    </div>
  </Carousel>
)

export default PersonsCarousel
