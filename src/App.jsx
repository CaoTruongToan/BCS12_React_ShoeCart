import { useState } from 'react'
import './App.css'
import Shoes from './Components/Shoes'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Shoes />
        <Footer/>
      </div>
    </>
  )
}

export default App
