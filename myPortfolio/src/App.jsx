import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import BigCard from './components/BigCard'
import About from './components/About'
import Project from './components/Project'
import Cert from './components/Cert'

function App() {
  const bubbles = Array.from({ length: 100 }).map((_, index) => {
    const size = Math.floor(Math.random() * 150) + 100
    const top = Math.random() * 100
    const left = Math.random() * 100
    const delay = Math.random() * 10
    const duration = 8 + Math.random() * 12
    const colors = [
      'rgba(72, 61, 139, 0.6)',     // Dark Slate Blue
      'rgba(138, 43, 226, 0.5)',    // Blue Violet
      'rgba(25, 25, 112, 0.6)',     // Midnight Blue
      'rgba(75, 0, 130, 0.4)',      // Indigo
    ]
    const background = colors[Math.floor(Math.random() * colors.length)]

    return (
      <div
        key={index}
        className="circle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          background,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    )
  })

  return (
    <>
      {/* Intense Animated Background */}
      <div className="bg-animation">
        {bubbles}
      </div>

      <Navbar />
      <BigCard />
      <About />
      <Project />
      <Cert />
      <footer className="text-center py-6">
        <p className="text-gray-600">
          &copy; 2025 Sudarshan Hegde. All rights reserved. <br />
          
        </p>
      </footer>
    </>
  )
}

export default App
