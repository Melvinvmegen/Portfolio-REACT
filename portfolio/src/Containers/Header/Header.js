import React from "react";
import Logo from "./Logo/Logo"
import Nav from "./Nav/Nav";
import CTA from "./CTA/CTA";
import StickyHeader from "./StickyHeader/StickyHeader";
import { Component } from "react";

class Header extends Component {
  state = {
    links: [
      { id: 1, name: 'Marketeur', name2: 'digital' },
      { id: 2, name: 'Développeur', name2: 'Web' },
      { id: 3, name: 'Traducteur', name2: '' },
      { id: 4, name: 'Mes', name2: 'projets' },
    ]
  }

  render() {
    return (
      <div className="site-header">
        <div className="site-header-wrapper">
          <header className="main-header">
            <div className="main-header-top">
              <Logo />
              <Nav links={this.state.links}/>
              <CTA />
            </div>
          </header>
        </div>
        <StickyHeader links={this.state.links}/>
      </div>
    )
  }
}

export default Header;

