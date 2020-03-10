import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import CTA from "./CTA/CTA";
import StickyHeader from "./StickyHeader/StickyHeader";
import MobileMenu from "./MobileMenu/MobileMenu"
import { Component } from "react";
import { BreakpointProvider } from 'react-socks';
import Modal from "../../Components/Modal/Modal";
import ContactForm from "./ContactForm/ContactForm";

class Header extends Component {
  state = {
    action: "Recrutez-moi !",
    show: false,
    visible: false
  }

  toggleMenu = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow })
  }

  modalHandler = () => {
    this.setState({ visible: true })
  }

  modalClosing = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div className="site-header">
        <Modal show={this.state.visible} modalClosed={this.modalClosing} >
          <ContactForm />
        </Modal>
        <div className="site-header-wrapper">
          <header className="main-header d-none d-sm-none d-md-none d-lg-flex">
            <Logo />
            <Nav />
            <CTA action={this.state.action} modal={this.modalHandler} />
          </header>
          <MobileMenu show={this.state.show} toggle={this.toggleMenu} />
        </div>
        <BreakpointProvider>
          <StickyHeader show={this.state.show} toggle={this.toggleMenu} modal={this.modalHandler} />
        </BreakpointProvider>
      </div>
    )
  }
}

export default Header;

