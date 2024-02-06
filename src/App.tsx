import "./styles.css"
import React, { useState } from 'react'
import Navbar from './Navbar'
import Book from './components/Book'
import Action from "./components/Action"
import News from "./components/News"
import Resurse from "./components/Resurse"
import Foot from "./components/Foot"
import training from "./images/training.jpg"
import meeting from "./images/meeting.jpg"



function App() {

  return (
    <div className="main-container">
      <Navbar />

      <Book />
      <Action />
      <News />
      <Resurse />
      <Foot />
    </div>


  )
}

export default App