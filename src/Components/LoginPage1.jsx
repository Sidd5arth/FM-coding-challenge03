import React from 'react'
import { useState, useRef, useEffect } from 'react';
import loginstyle from './loginstyle.css';
import FormInputComp from './TransitionComponents/FormInputComp';
import Sidebar from './Sidebar';
import ThankyouPage from './ThankyouPage';
import FinishingPage from './FinishingPage';
import PickAddon from './PickAddon';
import SelectPlan from './SelectPlan';
import InfoForm from './InfoForm';

function LoginPage1() {
    const [animate, setAnimate] = useState(true);
    const [step, setStep] = useState(1);
    console.log(step)

    const handleNextStep = () => {
        setStep(prev => prev+1);
    }
    const handlePrevStep = () => {
         setStep(prev => prev-1);
    }

    const pageTitle = () => {
        if(step === 1) return {
            heading:"Personal info",
            subheading: "Please provide you name, email address, and phone number",
            currentStep:1,
        }
        if(step === 2) return {
            heading: "Select Your Plan",
            subheading: "You have the option of monthly or yearly billing",
            currentStep:2,
        }
        if(step === 3) return {
            heading: "Pick add-ons",
            subheading: "Add-ons help enhance your gamind experience",
            currentStep:3,
        }
        if(step === 4) return {
            heading: "Finishing-up",
            subheading: "Double-check everythink looks OK before confirming",
            currentStep:4,
        }
        if(step === 5) return {
            heading: "Thankyou",
            subheading: "Thankyou for confirming your subscription! We hope you have fun using our platform, If you ever need support, please frll free to email us at @loremgaming.com",
        }
    }

  const handleClick = () => {
    setAnimate(false);
    if(step === 5){
        setStep(1);
        setAnimate(true);
    }else{
        setTimeout(() => {
            handleNextStep();
          }, 400);
          console.log(step)
    }
  }

  return (
    <div className='login-Container'>
        <Sidebar
        pageTitle={pageTitle}
        />
        <div className='info-form'>
            {step===1 && 
            <InfoForm
            pageTitle={pageTitle}
            setAnimate={setAnimate}
            animate={animate}
            />}
            {step===2 && 
            <SelectPlan
            pageTitle={pageTitle}
            />}
            {step===3 && 
            <PickAddon
            pageTitle={pageTitle}
            />}
            {step===4 && 
            <FinishingPage
            pageTitle={pageTitle}
            />}
            {step===5 && 
            <ThankyouPage
            pageTitle={pageTitle}
            />}
          <button onClick={handleClick} className='form-btn'>Next Step</button>
        </div>
      </div>
  )
}

export default LoginPage1;
