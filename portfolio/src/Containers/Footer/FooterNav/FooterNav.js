import React from 'react'

const footerNav = () => {
  return (
    <div className="footer-nav">
      <nav className="nav-footer-nav">
        <ul className="menu-items">
          <li id="menu-item" className="menu-item-has-children"><a href="" className="menu-item-title">Développeur
                      Web</a>
            <ul className="sub-menu">
              <li id="menu-item-6" className="menu-item-nav-footer"><a href="" className="footer-link">HTML</a></li>
              <li id="menu-item-7" className="menu-item-nav-footer"><a href="" className="footer-link">CSS</a></li>
              <li id="menu-item-8" className="menu-item-nav-footer"><a href="" className="footer-link">Javascript</a>
              </li>
              <li id="menu-item-9" className="menu-item-nav-footer"><a href="" className="footer-link">React</a></li>
              <li id="menu-item-10" className="menu-item-nav-footer"><a href="" className="footer-link">Ruby</a></li>
              <li id="menu-item-11" className="menu-item-nav-footer"><a href="" className="footer-link">Rails</a></li>
            </ul>
          </li>
          <li id="menu-item" className="menu-item-has-children"><a href="" className="menu-item-title">Marketing
                      Digital</a>
            <ul className="sub-menu">
              <li id="menu-item-2" className="menu-item-nav-footer"><a href="" className="footer-link">SEO</a></li>
              <li id="menu-item-3" className="menu-item-nav-footer"><a href="" className="footer-link">SEA</a></li>
              <li id="menu-item-4" className="menu-item-nav-footer"><a href="" className="footer-link">Email
                          Marketing</a></li>
              <li id="menu-item-5" className="menu-item-nav-footer"><a href="" className="footer-link">Marketing de
                          Contenu</a></li>
            </ul>
          </li>
          <li id="menu-item" className="menu-item-has-children"><a href="" className="menu-item-title">Traduction</a>
            <ul className="sub-menu">
              <li id="menu-item-12" className="menu-item-nav-footer"><a href="" className="footer-link">Français</a>
              </li>
              <li id="menu-item-13" className="menu-item-nav-footer"><a href="" className="footer-link">Anglais</a>
              </li>
              <li id="menu-item-14" className="menu-item-nav-footer"><a href="" className="footer-link">Hollandais</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default footerNav;
