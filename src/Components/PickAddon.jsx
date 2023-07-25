import React from 'react'
import AddOnComp from './TransitionComponents/AddOnComp'

function PickAddon({pageTitle}) {
  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <AddOnComp/>
    </div>
  )
}

export default PickAddon
