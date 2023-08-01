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
  var count = 0;
    const [animate, setAnimate] = useState(true);
    const [step, setStep] = useState(1);
    const [disable, setDisable] = useState(false);
    const [errorButton, setErrorButton] = useState(false);
    const [valid, setValid] = useState(false);
    const [activeCard, setActiveCard] = useState({});
    const [planSelect, setPlanSelect] = useState({
      state: false,
      name: "",
      price:"",
    })
    const [validState, setValidState] = useState({
      emptyEmail: true,
      emptyName: true,
      emptyPhone: true,
      name: {
        state: false,
        error: "Enter your name",
        value: "",
      },
      phone: {
        state: false,
        error: "Enter your Number",
        value:"",
      },
      email: {
        state: false,
        error: "Enter a valid Email",
        value:"",
      }
  
    });
    const [addonInfo, setAddonInfo] = useState(
      [
        {name:"Online service", state: false, addPrice: ""},
        {name:"Larger storage", state: false, addPrice: ""},
        {name:"Customizable profile", state: false, addPrice: ""},
      ]
      ); 

      const initialState = () => {
        if(validState.name.value === "" || validState.email.value === "" || validState.phone.value === ""){
          return true
        }else return false;
      }

      useEffect(() => {
        if(step === 1){
          if (Object.keys(validState).some(field => validState[field].state)) {
            setDisable(true);
            setErrorButton(true);
          } else if(initialState()){
            setDisable(false);
            setValid(false);
          }else{
            setDisable(false);
            setErrorButton(false);
          }
        }
        if(step === 2){
          if(Object.keys(activeCard).length === 0){
            setDisable(true);
            setErrorButton(true);
          }else{
            setDisable(false);
            setErrorButton(false);
          }
        }
        if(step === 3){
          if(addonInfo.every((addon) => addon.state === false)){
            setDisable(true);
            setErrorButton(true);
          }else{
            setDisable(false);
            setErrorButton(false);
          }
        }
      }, [validState, activeCard, setDisable, addonInfo]);
    
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
            heading: "Thankyou!",
            subheading: "Thankyou for confirming your subscription! I hope you have fun experience with this interface, for frontend related work and queries, please feel free to email me at @sidd5art5@gmail.com",
        }
    }

    const timingSequencer = () => {
        setAnimate(false);
        setTimeout(() => {
            setAnimate(true);
          }, 400);
    }

  const handleClickNext = () => {
    if(step === 3){
      if(addonInfo.every((addon) => addon.state === false)){
        setDisable(true);
        setErrorButton(true);
        return
      }else{
        setErrorButton(false);
        setDisable(false)
      }
    }
    if(step === 2){
      if(Object.keys(activeCard).length === 0){
        setErrorButton(true);
        setDisable(true)
        return;
      }else{
        setErrorButton(false);
        setDisable(false)
      }
    }
    if(step === 1){
      if(initialState()){
        setErrorButton(true);
        setDisable(true);
        setValid(true);
        return;
      }
  }
    if(step === 5){
        setStep(1);
        setAnimate(true);
    }
      if(!disable){
        timingSequencer();
          setTimeout(() => {
              handleNextStep();
            }, 400);
      }
  }
  const handleClickPrev = () => {
    validState.emptyEmail = true;
    validState.emptyName = true;
    validState.emptyPhone = true;
    
    timingSequencer();

    if(step === 4 || step === 3){
      setDisable(false);
  }
    if(step === 3){
      setTimeout(() => {
      }, 400);
  }

  if(step === 2){
    setErrorButton(false);
    setDisable(false);
  }
    
    if(step === 1){
        setErrorButton(false);
        setDisable(false);
        setAnimate(true);
    }else{
        setTimeout(() => {
            handlePrevStep();
          }, 400);
    }
  }
  const handlePlanInfo = (info) =>{
    setPlanSelect({ 
      ...planSelect,
      state: info,
    });
  }
  useEffect(() => {
    handleToggleChange(planSelect);
    handleAddonChange(planSelect);
  }, [planSelect.state]);

  const handleChange = () =>{
    setAnimate(false);
    setTimeout(() => {
      setStep(2);
      setAnimate(true);
    }, 400);

  }

function addZero(inputString) {
  const slashIndex = inputString.indexOf('/');
  if (slashIndex > 0) {
    const modifiedString = inputString.slice(0, slashIndex) + '0' + inputString.slice(slashIndex);
    const finalString = modifiedString.replace(/..$/, 'yr');
    return finalString;
  }
  return inputString;
}
function removeZero(inputString) {
  const slashIndex = inputString.indexOf('/');
  if (slashIndex > 1 && inputString[slashIndex - 1] === '0') {
    const modifiedString = inputString.slice(0, slashIndex - 1) + inputString.slice(slashIndex);
    const finalString = modifiedString.replace(/..$/, 'mo');
    return finalString;
  }
  return inputString;
}

  const handleToggleChange = (planSelect) =>{
    if(planSelect.state === true && planSelect.price !== ""){
      setPlanSelect({
        ...planSelect,
        price: addZero(planSelect.price)
      })
    }else if(planSelect.state === false && planSelect.price !== ""){
      setPlanSelect({
        ...planSelect,
        price: removeZero(planSelect.price)
      })
    }
  }
  const handleAddonChange = () => {
    addonInfo.map((addon) => {
      if(planSelect.state === true && addon.addPrice !== ""){
        addon.addPrice = addZero(addon.addPrice);
      }else if(planSelect.state === false && addon.addPrice !== ""){
        addon.addPrice = removeZero(addon.addPrice);
      }
    })
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
            validState={validState}
            setValidState={setValidState}
            valid={valid}
            />}
            {step===2 && 
            <SelectPlan
            pageTitle={pageTitle}
            planSelect={planSelect}
            setPlanSelect={setPlanSelect}
            animate={animate}
            planInfo={handlePlanInfo}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            />}
            {step===3 && 
            <PickAddon
            planSelect={planSelect}
            pageTitle={pageTitle}
            animate={animate}
            addonInfo={addonInfo}
            setAddonInfo={setAddonInfo}
            />}
            {step===4 && 
            <FinishingPage
            pageTitle={pageTitle}
            activeCard={activeCard}
            animate={animate}
            addonInfo={addonInfo}
            handleChange={handleChange}
            planSelect={planSelect}
            />}
            {step===5 && 
            <ThankyouPage
            pageTitle={pageTitle}
            />} 
          {step !== 5 && <div className="bnts">
          <button onClick={handleClickPrev} className={`form-btn2 ${step === 1 ? "hide" : ""}`}>Go Back</button>
          <div className='error-btn'>
           {step !== 1 && errorButton && <p className="er-p">Please Select an Option</p>}
           {step === 1 && errorButton && <p className="er-p2">Field is empty</p>}
          {step == 4 ? <button 
          disabled={disable} 
          onClick={handleClickNext} 
          className= {`form-btn blubtn ${errorButton ? "btn-shake" : ""}`}
          >
            Confirm
          </button> :
          <button 
          disabled={disable} 
          onClick={handleClickNext} 
          className= {`form-btn ${errorButton ? "btn-shake" : ""}`}
          >
            Next Step
          </button> 
          }
          </div>
          </div>}
        </div>
      </div>
  )
}
export default LoginPage1;
