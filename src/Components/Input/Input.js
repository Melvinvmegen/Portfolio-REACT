import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
  let inputElement = null
  const inputClasses = [classes.InputElement]
  if (props.classInput) {
    inputClasses.push(props.classInput)
  }
  let validationError = null
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    validationError = <p className={classes.ValidationError + " " + props.validationClass}>Veuillez entrer une valeur valide..</p>
  }

  switch (props.inputType) {
    case ('input'):
      inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}></input>;
      break;
    default:
      inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}></input>;
      break;
  }

  const divClasses = [classes.Input]
  if (props.classDiv) {
    divClasses.push(props.classDiv)
  }

  return (
    <div className={divClasses.join(' ')}>
      {props.label ? <label className={classes.Label}>{props.label}</label> : null}
      {inputElement}
      {validationError}
    </div>
  )
}

export default Input;
