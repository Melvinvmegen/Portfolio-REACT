import React, { Fragment } from 'react';
import Button from '../../../Components/FormSubmit/FormSubmit'
import Input from "../../../Components/Input/Input"
import { Component } from 'react';
import axios from '../../../axios-contacts'
import classes from './ContactForm.module.css'
import Spinner from "../../../Components/Spinner/Spinner";

class ContactForm extends Component {
  state = {
    loading: false,
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Nom, prénom'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      company: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Entreprise'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'E mail@gmail.com'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Ville'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      request: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Demande'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      }
    }
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
    console.log(updatedFormElement)
    form[inputIdentifier] = updatedFormElement
    this.setState({ orderForm: form })
  }

  contactHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const contact = {
      contactData: formData
    }
    axios.post('/contacts', contact)
      .then(response => { this.setState({ loading: false }) })
      .catch(error => { this.setState({ loading: false }) });
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
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

    let contactForm = <form onSubmit={this.contactHandler}>
      <h2 className={classes.titleForm}>Prenons contact</h2>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched} />
      ))}
      <Button wrapperClass={classes.wrapperBtnForm} btnClass={classes.btnForm} id={classes.submitForm} />
    </form >;
    if (this.state.loading) {
      contactForm = <Spinner />
    }
    return (
      (
        <Fragment>
          {contactForm}
        </Fragment>
      )
    )
  }
}

export default ContactForm
