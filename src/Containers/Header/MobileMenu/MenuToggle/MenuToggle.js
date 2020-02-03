import React from "react";

const MenuToggle = (props) => {

  return (
    <div className="menu-toggle" onClick={props.toggle}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}

export default MenuToggle;
