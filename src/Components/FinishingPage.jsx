import React from 'react'
import finishPage from './finsihPage.css';
function FinishingPage({pageTitle, activeCard, addonInfo}) {
  
  function extractNum(inputString) {
    const numbersOnly = inputString.match(/\d+/);
    if (numbersOnly) {
      return parseInt(numbersOnly[0], 10);
    } else {
      return null; 
    }
  }
  if(activeCard.price){
    var val = activeCard.price.slice(-2);
  }
  let duration = "";
  if(val === 'mo'){
    duration = 'per month';
  }else{
    duration = 'per year';
  }

  console.log(addonInfo);
  
  let sum = 0;
  if(addonInfo){
    addonInfo.map((ad) => {
      if(ad.state === true){
        sum += extractNum(ad.addPrice);
      }
    })
  }
  if(activeCard.price){
    sum = sum + extractNum(activeCard.price);
  }

  const handleChange = () =>{

  }

  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <div className="details">
      <div className="total-m">
      <div className='header'>
         <h4>Arcade</h4>
         <p onClick={handleChange} className='list-p'>Change</p>
      </div>
         <h4 className='list-h'>{activeCard.price}</h4>
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
          // If addon.state is false or undefined, return null
          return null;
        })}
    </div>
    <div className="total-info">
      <p>total ({duration})</p>
      <h3>${sum}/{val}</h3>
    </div>
    </div>
  )
}

export default FinishingPage
