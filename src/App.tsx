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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





const App: React.FC = () => {

  return (
    <div className="main-container">
      <Routes>
        <Route path="/take-action" element={<Action />} />
        {/* Add other routes if needed */}
      </Routes>
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