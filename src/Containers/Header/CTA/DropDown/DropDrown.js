import React from 'react'

const DropDown = () => {
  return (
    <div className="menu-dropdowns header-login">
      <button className="button-dropdowns">Langues</button>
      <div className="dropdown-content">
        <a href="/" className="dropdown-item">Français</a>
        <a href="/" className="dropdown-item">Anglais</a>
        <a href="/" className="dropdown-item">Hollandais</a>
      </div>
    </div>
  )
}

export default DropDown;
