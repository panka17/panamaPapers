import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import {Footer, Navbar } from './components'
import { Home,Panel,Login, Registration} from './container'
 

function App() {

  return (
    <BrowserRouter>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>

    </BrowserRouter>

  )
}

export default App
