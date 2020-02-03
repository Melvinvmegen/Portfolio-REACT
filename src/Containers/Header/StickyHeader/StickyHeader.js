import React, { useEffect, useState } from 'react'
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav";
import CTA from "../CTA/CTA";

const StickyHeader = (props) => {
  let [isSticky, setSticky] = useState(false);
  let ref = 0;

  const handleScroll = () => {
    ref = window.pageYOffset
    console.log(ref)
      setSticky(ref >= 500)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [])

  return (
    <div id={isSticky ? 'sticky-header' : ''} class="sticky-header-wrapper">
      <div className="sticky-header-container">
        <Logo />
        <Nav />
        <CTA />
      </div>
    </div>
  )
}

export default StickyHeader;
