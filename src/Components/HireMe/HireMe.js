import React from 'react'

const HireMe = (props) => {
  return (
    <div className="header-hire-me" onClick={props.modal} >
      <span>
        <a className="cta-button" id={props.id ? props.id : "sticky-hire-me"}
          title="hire-me">► {props.action ? props.action : "Recrutez-moi"}</a>
      </span>
    </div>
  )
}

export default HireMe;
