import React from 'react'
import { useEffect, useState, useRef } from 'react';
import './addonComp.css';

function AddOnComp({delayTime, name, addonPrice, addonHeading, addonSubheading, animate, addonState, addonInfo, setAddonInfo, planSelect}) {
  const delay = Number(delayTime);
 
  const [doAnimation, setDoAnimation] = useState(false);

  const checkboxRef = useRef(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoAnimation(true);
    }, [delay]);
    return () =>{ 
      clearTimeout(timer)
    }; 
}, [delay]);

//   useEffect(() => {
//     handleCheckboxChange();
// }, planSelect);

const handleCheckboxChange = (e) => {
  const addonName = e.target.name;
  const addonState = e.target.checked;

  if(addonState === false){
    addonPrice = "";
  }

  const addonExists = addonInfo.some((addon) => addon.name === addonName);

  if (addonExists) {
    const updatedAddons = addonInfo.map((addon) =>
      addon.name === addonName ? { ...addon, state: addonState, addPrice: addonPrice} : addon
    );
    setAddonInfo(updatedAddons);
  } else {
    const addonDetails = {
      name: addonName,
      state: addonState,
    };
    setAddonInfo([...addonInfo, addonDetails]);
  }
};
 

  return (
    <div className={`addon-content ${addonState ? "selected-addon" : ""} ${doAnimation && animate ? "input-in" : ""}`}>
        <div className="addonType">
          <label className='checkbox'>
            <input 
            name={name}
            type='checkbox' 
            checked={addonState}
            className='addon-checkbox'
            onChange={handleCheckboxChange}
            />
            <span className='check-img'></span>
          </label>
            <div className="addonText">
              <h4>{addonHeading}</h4>
              <p>{addonSubheading}</p>
            </div>
        </div>
        <p className='addon-p'>{addonPrice}</p>
    </div>
  )
}

export default AddOnComp
