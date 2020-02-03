import React, { Fragment } from 'react'

const SectionLeft = (props) => {
  return (
    <Fragment>
      <h2 className="title-bold">{props.blabla.title}</h2>
      <h3 className="featured-item-subheader italic">{props.blabla.subtitle}</h3>
      <p className="featured-item-body">{props.blabla.text}</p>
    </Fragment>
  )
}

export default SectionLeft;
