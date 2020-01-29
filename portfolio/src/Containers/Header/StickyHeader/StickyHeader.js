import React, { useEffect, useRef, useState } from 'react'
import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav";
import CTA from "../CTA/CTA";

const StickyHeader = (props) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    console.log(ref.current.getBoundingClientRect().top)
    setSticky(ref.current.getBoundingClientRect().top >= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [])

  return(
    <div id={isSticky ? 'sticky-header' : ''} ref={ref}>
      <div data-target={console.log(isSticky)} className="sticky-header-container">
        <Logo />
        <Nav links={props.links} />
        <CTA />
      </div>
    </div>
  )
}

export default StickyHeader;
