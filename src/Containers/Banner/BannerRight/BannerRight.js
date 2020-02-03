import React from 'react'
import Particles from 'react-particles-js';

const bannerRight = () => {
  return (
    <Particles className="d-none d-sm-block col-sm-4 col-md-4 align-center"
      params={{
        particles: {
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#3CA9D1",
            "opacity": 0.6,
            "width": 1
          }
        }
      }}
      style={{
        width: '100%',

      }} />
  )
}

export default bannerRight;
