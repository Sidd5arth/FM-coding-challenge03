import React from 'react'
import FormInputComp from './TransitionComponents/FormInputComp'

function InfoForm({pageTitle, setAnimate, animate}) {
  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <FormInputComp
    id="Name"
    label="Name"
    placeholder="e.g.Stephen King"
    delayTime="100"
    setAnimate={setAnimate}
    animate={animate}
    />
    <FormInputComp
    id="Email" 
    label="Email Address"
    placeholder="e.g.StephenKing@gmail.com"
    delayTime="200"
    setAnimate={setAnimate}
    animate={animate}
    />
    <FormInputComp
    id="Phone Number"
    label="Phone Number"
    placeholder="e.g. +1 234 567 890"
    delayTime="300"
    setAnimate={setAnimate}
    animate={animate}
    />
    </div>
  )
}

export default InfoForm
