import React, { useEffect, useState } from 'react'
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav";
import CTA from "../CTA/CTA";
import { Breakpoint } from 'react-socks';
import MobileMenu from '../MobileMenu/MobileMenu'

const StickyHeader = (props) => {
  let [isSticky, setSticky] = useState(false);
  let ref = 0;

  const handleScroll = () => {
    ref = window.pageYOffset
    setSticky(ref >= 496)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [])

  return (
    <div id={isSticky ? 'sticky-header' : ''} className="sticky-header-wrapper">
      <Breakpoint large up className="sticky-header-container">
        <Logo />
        <Nav />
        <CTA modal={props.modal} />
      </Breakpoint>
      <Breakpoint medium down className="sticky-header-container">
        <MobileMenu show={props.show} toggle={props.toggle} />
      </Breakpoint>
    </div>
  )
}

export default StickyHeader;
