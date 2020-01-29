import React, { Fragment } from 'react'

const polygons = (props) => {
  return (
    <Fragment>
      <span className="circle"></span>
      <div className="image-show-off">
        {props.inputs.map(input => {
          return <div className="clipped-border">
            <img
              src={input.img}
              alt={input.alt} id="clipped" />
          </div>
        })}
      </div>
    </Fragment>
  )
}

export default polygons
