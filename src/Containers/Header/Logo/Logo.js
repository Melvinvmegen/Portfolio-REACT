import React from 'react'
import classes from './Logo.module.css'
import logo from './LOGO.svg'

const Logo = (props) => {
  return (
    <div className="main-header-left">
      <img src={props.logo ? props.logo : logo} alt="" className={classes.Logo} />
    </div>
  )
}

export default Logo;
