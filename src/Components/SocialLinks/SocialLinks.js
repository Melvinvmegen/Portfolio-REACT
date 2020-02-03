import React from 'react'

const socialLinks = (props) => {
  return (
    <ul className="social-links">
      {props.links.map(link => {
        return <li key={link.id}>
          <a href={link.href} className={"icon fa " + link.icon}>
            <p className="social-link">{link.name}</p>
          </a>
        </li>
      })}
    </ul>
  )
}

export default socialLinks;
