import React, { Fragment } from 'react'

const carouselContent = (props) => {
  return (
    <Fragment>
      <h2 className="title-slide">{props.title}</h2>
      <p className="description-slide">{props.desc}</p>
    </Fragment>
  )
}

export default carouselContent;
