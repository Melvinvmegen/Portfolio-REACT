import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import CTA from "./CTA/CTA";
import StickyHeader from "./StickyHeader/StickyHeader";
import MobileMenu from "./MobileMenu/MobileMenu"
import { Component } from "react";
import { BreakpointProvider } from 'react-socks';

class Header extends Component {
  state = {
    action: "Recrutez-moi !",
    show: false,
  }

  toggleMenu = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow })
  }


  render() {
    return (
      <div className="site-header">
        <div className="site-header-wrapper">
          <header className="main-header d-none d-sm-none d-md-none d-lg-flex">
            <Logo />
            <Nav />
            <CTA action={this.state.action} />
          </header>
          <MobileMenu show={this.state.show} toggle={this.toggleMenu} />
        </div>
        <BreakpointProvider>
          <StickyHeader show={this.state.show} toggle={this.toggleMenu} />
        </BreakpointProvider>
      </div>
    )
  }
}

export default Header;

