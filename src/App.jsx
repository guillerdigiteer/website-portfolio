import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col h-screen gap-96'>
        <Navbar/>
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
