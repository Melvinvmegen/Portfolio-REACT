import React from 'react'

const buttonProject = (props) => {
  return (
    <div className="line-anim">
      <a href="#my-projects">
        <span className="text">► {props.text}</span>
        <span className="line -right"></span>
        <span className="line -top"></span>
        <span className="line -left"></span>
        <span className="line -bottom"></span>
      </a>
    </div>
  )
}

export default buttonProject;
