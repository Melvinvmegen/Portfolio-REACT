import React from "react";
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav";
import { BreakpointProvider } from 'react-socks';
import HireMe from "../../../Components/HireMe/HireMe";
import MenuToggle from "./MenuToggle/MenuToggle";

const MobileMenu = (props) => {

  return (
    <div className="mobile mobile-menu">
      <div className="mobile-header">
        <Logo />
        <MenuToggle toggle={props.toggle} />
        {
          props.show ?
            <div className="mobile-nav">
              <div className="mobile-header">
                <Logo />
                <MenuToggle toggle={props.toggle} />
              </div>
              <BreakpointProvider>
                <Nav />
                <div className="hire-me-mobile">
                  <HireMe />
                </div>
              </BreakpointProvider>
            </div> : null
        }
      </div>
    </div>

  )
}

export default MobileMenu;
