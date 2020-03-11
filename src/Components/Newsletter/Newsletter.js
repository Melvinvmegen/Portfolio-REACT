import React, { Component } from 'react'
import Button from '../FormSubmit/FormSubmit'
import Input from "../Input/Input"
import axios from '../../axios-contacts'
import classes from './Newsletter.module.css'
import Spinner from "../Spinner/Spinner";


class Newsletter extends Component {
  state = {
    sent: false,
    orderForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email@gmail.com'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const form = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...form[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    form[inputIdentifier] = updatedFormElement
    let formIsValid = true;
    for (let inputIdentifier in form) {
      formIsValid = form[inputIdentifier].valid && formIsValid;

    }
    this.setState({ orderForm: form, formIsValid: formIsValid })
  }

  contactHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const contact = {
      contactData: formData
    }
    axios.post('/newsletter.json', contact)
      .then(response => {
        this.setState({ sent: true })
      })
      .catch(error => {
        this.setState({ sent: false })
      });
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }
    return isValid
  }

  render() {
    const formElementsArray = []
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }

    return (
      <div className="footer-newsletter d-none d-sm-block">
        <p className="menu-item-newsletter"><span>Rejoingnez ma newsletter</span></p>
        <form onSubmit={this.contactHandler} className={classes.newsletterForm}>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              classInput={classes.newsletterInput}
              classDiv={classes.newsletterDiv} />
          ))}
          <Button wrapperClass={classes.wrapperBtnForm} btnClass={classes.btnNewsletter} id={classes.submitForm} action="S'inscrire" formIsValid={this.state.formIsValid} />
        </form>
        {this.state.sent ? <p className={classes.submitNotif}>Vous voilà inscris à la meilleure newsletter !</p> : null}
      </div>
    )
  }
}

export default Newsletter;
