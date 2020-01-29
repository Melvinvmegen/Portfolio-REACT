import React from 'react'

const nav = (props) => {
  return (
    <div className="main-header-center">
      <div className="nav-menu d-none d-sm-flex">
        {props.links.map(link => {
          return <div className="nav-menu-item-first">
            <a href={"#" + link.name + "-" + link.name2}><span className="text">{link.name + " " + link.name2}</span></a>
            <span className="line -bottom"></span>
          </div>
        })}
      </div>
    </div>
  )
}

export default nav;
