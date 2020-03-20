import React, { Fragment } from 'react'
import classes from './Logo.module.css'
import logo from './LOGO.svg'

const Logo = (props) => {
  return (
    <Fragment className="main-header-left">
      <img src={props.logo ? props.logo : logo} alt="" className={classes.Logo} />
    </Fragment>
  )
}

export default Logo;
