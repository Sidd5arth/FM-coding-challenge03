import React from 'react'
import './toggleComp.css';

function ToggleComp({planInfo, setActiveCard}) {
  const handleToggleChange = (e) =>{
    planInfo(e.target.checked)
    setActiveCard("");
  }
   return (
       <label className="toggle-switch">
         <input 
         type="checkbox" 
         className="toggle"
         onChange={handleToggleChange}/>
         <span className="slider" />
       </label>
     );
}

export default ToggleComp;


