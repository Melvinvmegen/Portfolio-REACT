import React from 'react'

const FormSubmit = (props) => {
  return (
    <div className={props.wrapperClass + " header-hire-me"} >
      <button className={props.btnClass} id={props.id} type="submit">► {props.action ? props.action : "Recrutez-moi"}</button>
    </div>
  )
}

export default FormSubmit;
