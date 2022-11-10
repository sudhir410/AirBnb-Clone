import React, { useState } from 'react'
import Logo from './Logo'
import { RiGlobalLine } from 'react-icons/ri'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { FaRegUserCircle } from 'react-icons/fa'
import './Header.css'
import Popup from './Popup'
function Header() {
    const [toggle, setToggle] = useState(false)
    const togglepopup = () => {
        setToggle(!toggle)
    }
    return (
        <div className='header_mainComponent'>
            <div className='header_logoContainer'>
                <Logo />
            </div>
            <div className='header_userComponent'>
                <div className='header_host'>
                    <p>Become a host</p>
                </div>
                <div className='globe'>
                    <RiGlobalLine style={{ fontSize: '1.3rem', paddingTop: '5px' }} />
                </div>
                <div onClick={togglepopup} className='userComponent'>
                    <IoReorderThreeOutline style={{ fontSize: '23px' }} />
                    <FaRegUserCircle style={{ fontSize: '30px', fontWeight: "100" }} />
                    {toggle && < Popup />}
                </div>

            </div>
        </div>
    )
}

export default Header