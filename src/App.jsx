import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import { Element } from 'react-scroll'
import Contact from './components/pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Element name='home'> <Home /></Element>
      <Element name='about'> <About /></Element>
      <Element name='projects'> <Projects /></Element>
      <Element name='contact'> <Contact/></Element>
    </>
  )
}

export default App
