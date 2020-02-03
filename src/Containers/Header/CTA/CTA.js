import React from 'react'
import HireMe from '../../../Components/HireMe/HireMe'

const CTA = (props) => {
  return (
    <div className="main-header-right">
      <div className="header-user d-none d-sm-none d-md-none d-lg-flex">
        <HireMe action={props.action}/>
      </div>
    </div>
  )
}

export default CTA;
