import React, { Component } from 'react'
import ContentContext from '../../../context/content-context'
import { Breakpoint } from 'react-socks';

class Nav extends Component {
  static contextType = ContentContext

  toggleActive = (index) => {
    const links = [...this.context.main]
    const alreadyActive = links.filter(link => link.active === true);
    if (alreadyActive.length > 0) {
      alreadyActive[0].active = false
      links[index].active = !links[index].active
      this.context.main = links
    }
    else {
      links[index].active = !links[index].active
      this.context.main = links
    }
  }

  render() {
    return (
      <div className="main-header-center" >
        <Breakpoint large up className="nav-menu">
          {this.context.main.map((link, index) => {
            return <div className="nav-menu-item" key={link.id} onClick={() => this.toggleActive(index)} className={link.active || window.location.hash == "#" + link.name.replace(/ /g, "-") ? "nav-anim" : ""} >
              <a href={"#" + link.name.replace(/ /g, "-")} data-target={link.id}>
                <span className="text" data-target={link.id}>{link.name}</span>
                <span className="line -bottom"></span>
              </a>
            </div>
          })}
        </Breakpoint>
        <Breakpoint medium down className="nav-menu-mobile">
          {this.context.main.map(link => {
            return <div className="nav-menu-item" key={link.id}>
              <a href={"#" + link.name.replace(/ /g, "-")} className=""><span className="text">{link.name}</span></a>
              <span className="line -bottom"></span>
            </div>
          })}
        </Breakpoint>
      </div>
    )
  }
}

export default Nav;
