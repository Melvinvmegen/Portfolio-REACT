import React from 'react';
import Button from '../../../Components/HireMe/HireMe'
import Input from "../../../Components/Input/Input"
import { Component } from 'react';
import axios from '../../../axios-contacts'

class ContactForm extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Name'
        },
        value: ''
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
    form[inputIdentifier] = updatedFormElement
    this.setState({ orderForm: form })
  }

  contactHandler = (event) => {
    event.preventDefault();
    console.log('jsuis la')
    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const contact = {
      contactData: formData
    }
    axios.post('/contacts.json', contact)
      .then(response => { console.log(response) })
      .catch(error => console.log(error));
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
      (
        <form onSubmit={this.contactHandler}>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(event) => this.inputChangedHandler(event, formElement.id)} />
          ))}
          <Button />
        </form>
      )
    )
  }
}

export default ContactForm
