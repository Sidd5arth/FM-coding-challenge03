import React from 'react'
import FormInputComp from './TransitionComponents/FormInputComp'
import CardComp from './TransitionComponents/CardComp';
import arcade from '../icons/icon-arcade.svg';
import advance from '../icons/icon-advanced.svg';
import pro from '../icons/icon-pro.svg';
import ToggleComp from './TransitionComponents/ToggleComp';


function SelectPlan({pageTitle}) {
  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <div className='card-display'>
       <CardComp
       imgSource={arcade}
       />
       <CardComp
       imgSource={advance}
       />
       <CardComp
       imgSource={pro}
       />
    </div>
    <div className="plan-type">
      <p>Monthly</p>
      <ToggleComp/>
      <p>yearly</p>
    </div>
    </div>
  )
}

export default SelectPlan
