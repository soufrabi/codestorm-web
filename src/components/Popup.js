import React from 'react'
import './Popup.css'
const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>

        <div className='popup-inner'>
            <h3 className='popup-header'>Take a Clear photo</h3>
            {/* <img src="./cross.jpg" alt='X'></img> */}
            <button className='close-btn' onClick={()=> props.setTrigger(false)}>X</button>
            {props.children}
        </div>
        </div>
  ): "";
}

export default Popup