import React, { useRef, useState } from 'react'
import logos from './images/logos.png';
import moon from './images/icon-moon.png';
import Action from './components/Action';
import News from './components/News';




const Navbar: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>('');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    }
    const renderContent = () => {
        if (activeTab === 'News') {
            return <News />;
        }
        return null; // Hide other components
    };



    return (
        <div>

            <nav className="nav">
                <div className="nav-container">
                    <a href="/" className="site-logo">
                        <img src={logos} className='logo' alt="Initiative Logo" />
                    </a>
                    <ul>
                        <li>
                            <a href="#" onClick={() => handleTabClick('News')} >მთავარი</a>
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
            {renderContent()}

        </div>

    )
}

export default Navbar