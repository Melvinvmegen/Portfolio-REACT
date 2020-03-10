import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
  let inputElement = null

  switch (props.inputType) {
    case ('input'):
      inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}></input>;
      break;
    case ('texarea'):
      inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}></input>;
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}></input>;
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default Input;
