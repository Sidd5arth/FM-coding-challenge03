import React from 'react'

function ThankyouPage({pageTitle}) {
  return (
    <div className="form-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    </div>
  )
}

export default ThankyouPage
