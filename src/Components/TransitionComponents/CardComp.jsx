import React from 'react';
import '../loginstyle.css';
import { useEffect, useState } from 'react';

function CardComp({onSelect, delayTime, imgSource, planSelect, heading, price, animate, selected}) {
  const delay = Number(delayTime);

  const [doAnimation, setDoAnimation] = useState(false);
  const [doAnimationImg, setDoAnimationImg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoAnimation(true);
    }, [delay]);
    const timer2 = setTimeout(() => {
      setDoAnimationImg(true);
    }, [delay+300]);
    return () =>{ 
      clearTimeout(timer)
      clearTimeout(timer2)
    }; 
}, [delay]);

const handleClick = () =>{
  const cardData = {
    name: heading,
    price: price,
  }
  onSelect(cardData);
}

  return ( 
    <div onClick={handleClick} className={`card-container ${doAnimation && animate? "pop" : ""} ${selected ? "selected-card" : ""}`}>
      <img className={`plan-image ${doAnimationImg && animate ? "pop" : ""}`} src={imgSource}/>
      <div className="card-info">
         <h4 style={{color: "var(--m-blue)"}} >{heading}</h4>
         <p className='light-text'>{price}</p>
         {planSelect.state && <p style={{color: "var(--m-blue)"}}>2 month free</p>}
      </div>
    </div>
  )
}

export default CardComp
