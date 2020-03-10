import React from 'react'

const HireMe = (props) => {
  return (
    <div className={props.wrapperClass + " header-hire-me"} onClick={props.modal} >
      <span>
        <a className={props.btnClass + " cta-button"} id={props.id ? props.id : "sticky-hire-me"}
          title="hire-me" >► {props.action ? props.action : "Recrutez-moi"}</a>
      </span>
    </div>
  )
}

export default HireMe;
