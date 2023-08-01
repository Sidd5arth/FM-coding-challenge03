import React from 'react'
import './toggleComp.css';
import { useEffect } from 'react';

function ToggleComp({planInfo, planSelect, setPlanSelect, planChange}) {

  const handleToggleChange = (e) =>{
    planInfo(e.target.checked);

  }
   return (
       <label className="toggle-switch">
         <input 
         type="checkbox" 
         checked={planSelect.state}
         className="toggle"
         onChange={handleToggleChange}/>
         <span className="slider" />
       </label>
     );
}

export default ToggleComp;


