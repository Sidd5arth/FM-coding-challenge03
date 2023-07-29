import React from 'react'
import AddOnComp from './TransitionComponents/AddOnComp'

function PickAddon({pageTitle, planSelect, animate, addonInfo, setAddonInfo}) {

  // const [checkValue, setCheckValue] = useState(false);

  let priceData = {
    servicePrice: "+$1/mo",
    storagePrice: "+$2/mo",
    profilePrice: "+$2/mo"
  }
  if(planSelect){
  priceData =
   {
      servicePrice: "+$10/yr",
      storagePrice: "+$20/yr",
      profilePrice: "+$20/yr"
    }
  }
  return (
    <div className="addon-container">
    <div className="form-title">
      <h1 className='title-h'>{pageTitle()?.heading}</h1>
      <p className='title-p'>{pageTitle()?.subheading}</p>
    </div>
    <AddOnComp
    delayTime="100"
    addonHeading="Online Service"
    addonSubheading="Access to multiplayer games"
    addonPrice={priceData.servicePrice}
    animate={animate}
    name="Online service"
    setAddonInfo={setAddonInfo}
    addonInfo={addonInfo}
    addonState={addonInfo[0].state}
    />
    <AddOnComp
    delayTime="200"
    addonHeading="Larger Storage"
    addonSubheading="Extra 1TB of cloud save"
    addonPrice={priceData.storagePrice}
    animate={animate}
    name="Larger storage"
    setAddonInfo={setAddonInfo}
    addonInfo={addonInfo}
    addonState={addonInfo[1].state}
    />
    <AddOnComp
    delayTime="300"
    addonHeading="Customizable profile"
    addonSubheading="Custom theme on your profile"
    addonPrice={priceData.profilePrice}
    animate={animate}
    name="Customizable profile"
    setAddonInfo={setAddonInfo}
    addonInfo={addonInfo}
    addonState={addonInfo[2].state}
    />
    </div>
  )
}

export default PickAddon
