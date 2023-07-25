import React from 'react';

function CardComp({imgSource}) {
  return ( 
    <div className='card-container'>
      <img className="plan-image" src={imgSource}/>
      <div className="card-info">
         <h4>Arcade</h4>
         <p>$9/mo</p>
         <p>2 month free</p>
      </div>
    </div>
  )
}

export default CardComp
