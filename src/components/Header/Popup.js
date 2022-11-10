import React from 'react'
import './Popup.css'
function Popup() {
    return (
        <div className='popup_mainContainer'>
            <ul className='signupContainer'>
                <li className='signup'>Sign up</li>
                <li>Log in</li>
            </ul>
            <ul>
                <li>Host your home</li>
                <li>Host an experience</li>
                <li>Help</li>
            </ul>
        </div>
    )
}

export default Popup