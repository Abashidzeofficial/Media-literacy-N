import "./styles.css"
import React, { useState, useRef } from 'react'
import Navbar from './Navbar'
import Book from './components/Book'
import Action from "./components/Action"
import News from "./components/News"
import Resurse from "./components/Resurse"
import Foot from "./components/Foot"
import training from "./images/training.jpg"
import meeting from "./images/meeting.jpg"





function App() {

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="main-container">
      <Navbar handleClick={handleClick} />
      <Book />
      <Action ref={ref} />
      <News />
      <Resurse />
      <Foot />
    </div>



  )
}

export default App