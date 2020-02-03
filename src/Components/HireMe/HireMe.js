import React from 'react'

const HireMe = (props) => {
  return (
    <div className="header-hire-me">
      <span>
        <a className="cta-button" id={props.id ? props.id : "sticky-hire-me"} href="mailto:melvin.vmegen@gmail.com"
          title="hire-me">► {props.action ? props.action : "Recrutez-moi"}</a>
      </span>
    </div>
  )
}

export default HireMe;
