import React, { useContext } from 'react'
import ContentContext from '../../../context/content-context'
import { Breakpoint } from 'react-socks';

const Nav = () => {
  const content = useContext(ContentContext)

  return (
    <div className="main-header-center">
      <Breakpoint large up className="nav-menu">
        {content.main.map(link => {
          return <div className="nav-menu-item" key={link.id} className={"https://melvinvmegen.github.io/Portfolio/#" + link.name.replace(/ /g, "-") === document.URL ? "nav-anim" : ""} >
            <a href={"#" + link.name.replace(/ /g, "-")}>
              <span className="text">{link.name}</span>
              <span className="line -bottom"></span>
            </a>
          </div>
        })}
      </Breakpoint>
      <Breakpoint medium down className="nav-menu-mobile">
        {content.main.map(link => {
          return <div className="nav-menu-item" key={link.id}>
            <a href={"#" + link.name.replace(/ /g, "-")} className=""><span className="text">{link.name}</span></a>
            <span className="line -bottom"></span>
          </div>
        })}
      </Breakpoint>
    </div>
  )
}

export default Nav;
