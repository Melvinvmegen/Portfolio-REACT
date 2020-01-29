import React from 'react'
import HireMe from '../../../Components/HireMe/HireMe'
import DropDown from './DropDown/DropDrown'

const CTA = () => {
  return (
    <div className="main-header-right">
      <div className="header-user d-none d-sm-flex">
        <HireMe />
        <DropDown />
      </div>
    </div>
  )
}

export default CTA;
