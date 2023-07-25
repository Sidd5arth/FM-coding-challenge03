import React from 'react'
import './toggleComp.css';

function ToggleComp() {
   return (
       <label className="toggle-switch">
         <input type="checkbox" className="toggle"/>
         <span className="slider" />
       </label>
     );
}

export default ToggleComp;


