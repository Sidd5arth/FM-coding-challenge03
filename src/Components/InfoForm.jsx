import React, { useState } from 'react'
import FormInputComp from './TransitionComponents/FormInputComp'

function InfoForm({pageTitle, setAnimate, animate, validState, setValidState, valid}) {


  const handleForm = (val) => {
    if(val.id === 'Email'){
      setValidState(prevState => ({
        ...prevState,
        emptyEmail: false,
      }))
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(val.detail);

      if (!isValidEmail) {
        setValidState(prevState => ({
          ...prevState,
          email: {
            ...prevState.email,
            state: true,
            value: val.detail
          }
        }));
      } else {
        setValidState(prevState => ({
          ...prevState,
          email: {
            ...prevState.email,
            state: false,
            value: val.detail
          }
        }));
      }
    }
    if(val.id === "Phone Number"){
      setValidState(prevState => ({
        ...prevState,
        emptyPhone: false,
      }))
      const regex = /^[0-9]+$/;
      const isNumber = regex.test(val.detail);
      if (!isNumber) {
        setValidState(prevState => ({
          ...prevState,
          phone: {
            ...prevState.phone,
            state: true,
            value: val.detail
          }
        }));
      } else {
        setValidState(prevState => ({
          ...prevState,
          phone: {
            ...prevState.phone,
            state: false,
            value: val.detail
          }
        }));
      }
  }
    if(val.id === "Name"){
      setValidState(prevState => ({
        ...prevState,
        emptyName: false,
      }))
      if (val.id === "Name") {
      if (val.detail === "") {
        setValidState(prevState => ({
          ...prevState,
          name: {
            ...prevState.name,
            state: true,
            value: val.detail
          }
        }));
      } else {
        setValidState(prevState => ({
          ...prevState,
          name: {
            ...prevState.name,
            state: false,
            value: val.detail
          }
        }));
      }
  }
}
  }
  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <FormInputComp
    id="Name"
    label="Name"
    placeholder="e.g.Siddharth Kushwaha"
    delayTime="100"
    value={validState.name.value}
    setAnimate={setAnimate}
    animate={animate}
    handleForm={handleForm}
    validState={validState.name.state}
    error={validState.name.error}
    valid={valid}
    />
    <FormInputComp
    id="Email" 
    label="Email Address"
    placeholder="e.g.sidd5art5@gmail.com"
    delayTime="200"
    value={validState.email.value}
    setAnimate={setAnimate}
    animate={animate}
    handleForm={handleForm}
    validState={validState.email.state}
    error={validState.email.error}
    valid={valid}
    />
    <FormInputComp
    id="Phone Number"
    label="Phone Number"
    placeholder="e.g. +1 234 567 890"
    delayTime="300"
    value={validState.phone.value}
    setAnimate={setAnimate}
    animate={animate}
    handleForm={handleForm}
    valid={valid}
    validState={validState.phone.state}
    error={validState.phone.error}
    />
    </div>
  )
}

export default InfoForm;
