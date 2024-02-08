import React, { useRef, useState } from 'react'
import logos from './images/logos.png';
import moon from './images/icon-moon.png';
import Action from './components/Action';




function Navbar() {


    return (
        <div>

            <nav className="nav">
                <div className="nav-container">
                    <a href="/" className="site-logo">
                        <img src={logos} className='logo' alt="Initiative Logo" />
                    </a>
                    <ul>
                        <li>
                            <a href="Take-action" >მთავარი</a>
                        </li>
                        <li>
                            <a href="News">სიახლეები</a>
                        </li>
                        <li>
                            <a href="Resurse libery">მულტიმედია</a>
                        </li>
                    </ul>
                    <button className='them' >
                        {/* <span className="moon-text">DARK</span> */}
                        <img src={moon} alt="moon" className="moon" />
                    </button>
                </div>

            </nav>

        </div>

    )
}

export default Navbar