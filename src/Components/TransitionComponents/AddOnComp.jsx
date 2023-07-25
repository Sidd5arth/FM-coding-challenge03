import React from 'react'
import { useEffect, useState, useRef } from 'react';

function AddOnComp({delayTime, addonHeading, addonSubheading}) {
  const contentRef = useRef(null);
  const delay = Number(delayTime);
 
  const [doAnimation, setDoAnimation] = useState(false);
 
  useEffect(() => {
      const timer = setTimeout(() => {
        setDoAnimation(true);
      }, [delay]);
      return () => clearTimeout(timer); 
  }, [delay]);
  return (
    <div ref={contentRef}>
        <div className="addon-content">
            <div className="addonType">
                <input type='checkbox' className='addon-checkbox'/>
                <div className="addonText">
                  <h4>{addonHeading}</h4>
                  <p>{addonSubheading}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddOnComp
