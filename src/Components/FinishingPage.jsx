import React from 'react'
import { useEffect, useState } from 'react';
import finishPage from './finsihPage.css';
function FinishingPage({pageTitle, activeCard, addonInfo, animate, handleChange, planSelect}) {

  const [doAnimation, setDoAnimation] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
        setDoAnimation(true);
      }, 50);
      return () => clearTimeout(timer); 
  }, []);
  
  function extractNum(inputString) {
    const numbersOnly = inputString.match(/\d+/);
    if (numbersOnly) {
      return parseInt(numbersOnly[0], 10);
    } else {
      return null; 
    }
  }
  if(planSelect.price){
    var val = planSelect.price.slice(-2);
  }
  let duration = "";
  if(val === 'mo'){
    duration = 'per month';
  }else{
    duration = 'per year';
  }

  let sum = 0;

  if(addonInfo){
    addonInfo.map((ad) => {
      if(ad.state === true){
        sum += extractNum(ad.addPrice);
      }
    })
  }
  if(planSelect.price){
    sum = sum + extractNum(planSelect.price);
  }


  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <div className={`details ${doAnimation && animate ? "d-animate" : ""}`}>
      <div className="total-m">
      <div className='header'>
         <h4>Arcade</h4>
         <p onClick={handleChange} className='list-p'>Change</p>
      </div>
         <h4 className='list-h'>{planSelect.price}</h4>
      </div>
      <hr/>
      {addonInfo.map((addon) => {
          if (addon.state === true) {
            return (
              <ul key={addon.name}>
                <li>
                  <div className="list-style">
                    <p>{addon.name}</p>
                    <p>{addon.addPrice}</p>
                  </div>
                </li>
              </ul>
            );
          }
          return null;
        })}
    </div>
    <div className={`total-info ${doAnimation && animate ? "d" : ""}`}>
      <p>total ({duration})</p>
      <h3>${sum}/{val}</h3>
    </div>
    </div>
  )
}

export default FinishingPage
