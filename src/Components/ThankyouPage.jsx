import React from 'react'
import thanks from '../icons/icon-thank-you.svg';
import './thankyou.css';
import { useEffect, useState } from 'react';


function ThankyouPage({pageTitle}) {
  const [doAnimation, setDoAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoAnimation(true);
    }, 100);
    return () =>{ 
      clearTimeout(timer)
    }; 
}, []);
  return (
    <div className={`th-container ${doAnimation ? "reveal" : ""}`}>
    <img src={thanks} className={`th-icon ${doAnimation ? "popanimate" : ""}`}/>
    <div className="th-p">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    </div>
  )
}

export default ThankyouPage
