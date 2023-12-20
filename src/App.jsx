import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home />}> 
        </Route>
        <Route path='/more' element={<Portfolio />}> 
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
