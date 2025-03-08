import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Explore } from './Explore/Explore.jsx'
import { Create } from './Create/Create.jsx'
import { MyFaves } from './MyFaves/MyFaves.jsx'

function App() {
 
  return (
    <>

      <Routes>
           <Route path="/" element={< Explore />} />
           <Route path="/create" element={< Create />} />
           <Route path="/my-faves" element={< MyFaves />} />
      </Routes>

    </>
  )
}

export default App
 