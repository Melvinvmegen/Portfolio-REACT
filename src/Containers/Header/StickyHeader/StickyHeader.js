import React, { useEffect, useState } from 'react'
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav";
import CTA from "../CTA/CTA";

const StickyHeader = () => {
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
      <div className="sticky-header-container">
        <Logo />
        <Nav />
        <CTA />
      </div>
    </div>
  )
}

export default StickyHeader;
