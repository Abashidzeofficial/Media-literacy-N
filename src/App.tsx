import "./styles.css"
import React, { useState, useRef, } from 'react'
import { Routes, Route } from "react-router-dom"
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
    <>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/" element={<Action />} />
          <Route path="/" element={<News />} />
          <Route path="/" element={<Resurse />} />
          <Route path="/" element={<Foot />} />
        </Routes>
      </div>
    </>






  )
}

export default App