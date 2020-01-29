import React from 'react'
import Typed from 'react-typed';
import HomeText from './HomeText/HomeText';
import HireMe from '../../../Components/HireMe/HireMe'

const bannerLeft = () => {
  return (
    <div className="header">
      <Typed
        strings={[
          'Je fais du React.js',
          'Je fais du Rails',
          'Je fais du SEO',
          'Je fais du SEA',]}
        typeSpeed={40}
        backSpeed={50}
        loop
        className="typing">
      </Typed>
      <div id="cta-wrapper-home">
        <HomeText />
        <HireMe />
      </div>
    </div>
  )
}

export default bannerLeft;
