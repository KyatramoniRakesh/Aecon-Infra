import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Topbar from './components/TopNav'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar/>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
