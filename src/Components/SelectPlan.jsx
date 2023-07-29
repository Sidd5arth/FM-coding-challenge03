import React, { useState } from 'react'
import FormInputComp from './TransitionComponents/FormInputComp'
import CardComp from './TransitionComponents/CardComp';
import arcade from '../icons/icon-arcade.svg';
import advance from '../icons/icon-advanced.svg';
import pro from '../icons/icon-pro.svg';
import ToggleComp from './TransitionComponents/ToggleComp';
import { useEffect } from 'react';


function SelectPlan({pageTitle, planInfo, planSelect, animate, setActiveCard,activeCard}) {
    
  const [doAnimation, setDoAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoAnimation(true);
    }, 600);
    return () =>{ 
      clearTimeout(timer)
    }; 
}, []);

  let cardDetails = {
    arcade: "$9/mo",
    advance: "$12/mo",
    pro: "$15/mo",
  }
  if(planSelect){
    cardDetails = {
      arcade: "$90/yr",
      advance: "$120/yr",
      pro: "$150/yr",
    }
  }

   const handleClick = (selectedPlan) => {
    setActiveCard(selectedPlan)
   }

  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <div className='card-display'>
       <CardComp
       onSelect={handleClick}
       imgSource={arcade}
       heading="Arcade"
       price={cardDetails.arcade}
       planSelect={planSelect}
       delayTime="50"
       animate={animate}
       selected={activeCard.name === 'Arcade'}
       />
       <CardComp
       onSelect={handleClick}
       imgSource={advance}
       heading="Advance"
       price={cardDetails.advance}
       planSelect={planSelect}
       delayTime="150"
       animate={animate}
       selected={activeCard.name === 'Advance'}
       />
       <CardComp
       onSelect={handleClick}
       imgSource={pro}
       heading="Pro"
       price={cardDetails.pro}
       planSelect={planSelect}
       delayTime="250"
       animate={animate}
       selected={activeCard.name === 'Pro'}
       />
    </div>
    <div className={`plan-type ${doAnimation && animate ? "pop" : ""}`}>
      <p>Monthly</p>
      <ToggleComp
      planInfo={planInfo}
      setActiveCard={setActiveCard}
      />
      <p>yearly</p>
    </div>
    </div>
  )
}

export default SelectPlan
