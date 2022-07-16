import React, { useState, useEffect } from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import { Link } from 'react-scroll'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [colorChange, setNavbar] = useState(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 26) {
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div className={colorChange ? 'navbar bg-light' : 'navbar'}>
            <div className='container'>
                <h1>Techweb</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                    <Link activeClass="active"  className='nav-links' smooth spy to="home">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link activeClass="active"  className='nav-links' smooth spy to="feature">
                        Feature
                    </Link>
                    </li>
                    <li>
                    <Link activeClass="active"  className='nav-links' smooth spy to="partners">
                        Partners
                    </Link>
                    </li>
                    <li>
                        <Link activeClass="active"  className='nav-links' smooth spy to="service">
                            Service
                        </Link>
                    </li>
                    <li>
                    <Link activeClass="active"  className='nav-links' smooth spy to="contact">
                        Contact
                    </Link>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
