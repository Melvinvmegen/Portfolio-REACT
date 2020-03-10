import React from 'react'

const carouselImage = (props) => {
  return (
    <div className="gallery-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
      <a href={props.href}>
        <img src={props.img} alt={props.alt} className="img-gallery" />
      </a>
    </div>
  )
}

export default carouselImage;
