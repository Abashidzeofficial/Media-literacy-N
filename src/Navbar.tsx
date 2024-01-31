import React from 'react'
import logos from './images/logos.png';
import moon from './images/icon-moon.png';


function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <a href="/" className="site-logo">
                    <img src={logos} className='logo' alt="Initiative Logo" />
                </a>
                <ul>
                    <li>
                        <a href="Take action">Take action</a>
                    </li>
                    <li>
                        <a href="News">News</a>
                    </li>
                    <li>
                        <a href="Resurse libery">Resurse libery</a>
                    </li>
                </ul>
                <button className='them' >
                    {/* <span className="moon-text">DARK</span> */}
                    <img src={moon} alt="moon" className="moon" />
                </button>
            </div>

        </nav>
    )
}

export default Navbar