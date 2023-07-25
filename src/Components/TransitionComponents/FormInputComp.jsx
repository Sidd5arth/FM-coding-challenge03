import React, { useEffect, useRef, useState } from "react";
import loginstyle from '../loginstyle.css';

const FormInputComp = ({ id, label, placeholder, delayTime, setAnimate, animate}) => {
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
    <div ref={contentRef} className={`input-styles ${doAnimation && animate ? "input-transitions-in" : ""}`}>
      <label htmlFor={id} className='input-styles-lable'>{label}</label>
      <input 
      title={id}
      id={id}
      className='inner-input'
      placeholder={placeholder}/>
    </div>
  );
};

export default FormInputComp;
