import React from 'react'

const newsletter = () => {
  return (
    <div className="footer-newsletter d-none d-sm-block">
      <p className="menu-item-newsletter"><span>Rejoingnez ma newsletter</span></p>
      <form className="newsletter-form">
        <input className="newsletter-input" type="text" name="Email" placeholder="name@website.com"
          aria-required="true" />
        <button type="submit" value="subscribe" name="subscribe" className="button-newsletter">S'inscrire</button>
      </form>
    </div>
  )
}

export default newsletter;
