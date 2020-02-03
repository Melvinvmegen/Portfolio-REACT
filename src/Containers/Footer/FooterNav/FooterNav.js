import React from 'react'

const FooterNav = (props) => {

  return (
    <ul className="menu-items">
      {props.links.map(content => {
        return <li id="menu-item" className="menu-item-has-children" key={content.id}><a href="/" className="menu-item-title" >{content.title}</a>
          {content.links.map(link => {
            return <ul className="sub-menu" key={link.id}>
              <li id="menu-item-6" className="menu-item-nav-footer"><a href="/" className="footer-link">{link.name}</a></li>
            </ul>
          })
          }
        </li>
      }
      )
      }
    </ul>
  )
}
export default FooterNav;
