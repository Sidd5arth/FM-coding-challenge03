import React, { useEffect, useRef, useState } from "react";
import loginstyle from '../loginstyle.css';

const FormInputComp = ({ error, validState, id, label, placeholder, delayTime, animate, handleForm, valid}) => {

  const delay = Number(delayTime);
  const [doAnimation, setDoAnimation] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
        setDoAnimation(true);
      }, [delay]);
      return () => clearTimeout(timer); 
  }, [delay]);

  const handleChange = (e) => {
    const formDetails = {
      detail: e.target.value,
      id: id,
    }
    console.log(formDetails);
    handleForm(formDetails);
  }

  return (
    <div className={`input-styles ${doAnimation && animate ? "input-transitions-in" : ""}`}>
      <div className="lable-style">
      <label htmlFor={id} className='input-styles-lable'>{label}</label>
      {validState&&<p className="p-error">{error}</p>}
      </div>
      <input 
      title={id}
      id={id}
      className={`inner-input ${validState || valid ? "error" : ""}`}
      onChange={handleChange}
      placeholder={placeholder}/>
    </div>
  );
};


export default FormInputComp;
