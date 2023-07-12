import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from "./contents/Info"
import About from "./contents/About"
import Interests from './contents/Interests'
import Links from './contents/Links'

function App() {
  return (
    <div className='container'>
    < Info />
    < About />
    < Interests />
    < Links />
    </div>
  )
}

export default App
