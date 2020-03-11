import React, { Component } from 'react'
import Typed from 'react-typed';
import HomeText from './HomeText/HomeText';
import HireMe from '../../../Components/HireMe/HireMe'
import Modal from "../../../Components/Modal/Modal";
import ContactForm from "../../../Components/ContactForm/ContactForm";


class BannerLeft extends Component {
  state = {
    action: "Recrutez-moi !",
    id: "hire-me",
    visible: false,
  }

  modalHandler = () => {
    this.setState({ visible: true })
  }

  modalClosing = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div className="header">
        <Modal show={this.state.visible} modalClosed={this.modalClosing} >
          <ContactForm show={this.state.visible} />
        </Modal>
        <div className="typed-container">
          <Typed
            strings={[
              'Je fais du Front-end sur React.js',
              'Je fais du Back-end sur Rails',
              'Je fais du PostgreSQL',
              'Je fais du Marketing Digital',
              'Je fais du SEO',
              'Mais aussi du SEA',]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="typing">
          </Typed>
        </div>
        <div id="cta-wrapper-home">
          <HomeText />
          <HireMe id={this.state.id} action={this.state.action} modal={this.modalHandler} />
        </div>
      </div>
    )
  }
}

export default BannerLeft;
