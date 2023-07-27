import React from 'react'
import LoginPage1 from './LoginPage1';

function Sidebar({pageTitle}) {

  return (
    <div className="side-bar">
        <div className='side-points'>
            <div className={`num-style ${pageTitle().currentStep === 1 ? "num-style-current" : ""}`}>
                <span className="circle"></span>
                <h4>1</h4>
            </div>
            <div className="about-num">
                <p className='sidebar-p'>STEP 1</p>
                <h4>YOUR INFO</h4>
            </div>
        </div>
        <div className='side-points'>
            <div className={`num-style ${pageTitle().currentStep === 2 ? "num-style-current" : ""}`}>
                <span className="circle"></span>
                <h4>2</h4>
            </div>
            <div className="about-num">
                <p className='sidebar-p'>STEP 2</p>
                <h4>SELECT PLAN</h4>
            </div>
        </div>
        <div className='side-points'>
            <div className={`num-style ${pageTitle().currentStep === 3 ? "num-style-current" : ""}`}>
                <span className="circle"></span>
                <h4>3</h4>
            </div>
            <div className="about-num">
                <p className='sidebar-p'>STEP 3</p>
                <h4>ADD-ONS</h4>
            </div>
        </div>
        <div className='side-points'>
            <div className={`num-style ${pageTitle().currentStep === 4 ? "num-style-current" : ""}`}>
                <span className="circle"></span>
                <h4>4</h4>
            </div>
            <div className="about-num">
                <p className='sidebar-p'>STEP 4</p>
                <h4>SUMMARY</h4>
            </div>
        </div>
        </div>
  )
}

export default Sidebar
