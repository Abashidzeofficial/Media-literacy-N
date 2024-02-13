import "./styles.css"
import React, { useState, } from 'react'
import Book from './components/Book'
import Action from "./components/Action"
import News from "./components/News"
import Resurse from "./components/Resurse"
import Foot from "./components/Foot"
import training from "./images/training.jpg"
import meeting from "./images/meeting.jpg"
import { useRef } from "react"
import logos from './images/logos.png';
import moon from './images/icon-moon.png';






function App() {

  const [showNews, setShowNews] = useState(false);
  const [showRes, setShowRes] = useState(false);

  const handleClickHome = () => {
    setShowNews(false);
    setShowRes(false);
  };

  const handleClick = () => {
    setShowNews(true);
    setShowRes(false);
  };

  const handleClickRes = () => {
    setShowRes(true);
    setShowNews(false);
  };

  return (
    <div className="main-container">
      <nav className="nav">
        <div className="nav-container">
          <a href="/" className="site-logo">
            <img src={logos} className='logo' alt="Initiative Logo" />
          </a>
          <ul>
            <li>
              <a href="#" onClick={handleClickHome} >მთავარი</a>
            </li>
            <li>
              <a href="#" onClick={handleClick} >სიახლეები</a>
            </li>
            <li>
              <a href="#" onClick={handleClickRes}>მულტიმედია</a>
            </li>
          </ul>
          <button className='them' >
            {/* <span className="moon-text">DARK</span> */}
            <img src={moon} alt="moon" className="moon" />
          </button>
        </div>

      </nav>
      {showNews && <News />}
      {showRes && <Resurse />}
      {!showNews && !showRes && (
        <>
          <Book />
          <Action />
          <News />
          <Resurse />
          <Foot />
        </>
      )}

    </div>



  )
}

export default App