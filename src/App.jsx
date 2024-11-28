import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Layout from './Components/Layout'
import { GlobalContext } from './Context/GlobalContext'


function App() {


  return (
    <>
      <GlobalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />



          </Routes>

        </BrowserRouter>
      </GlobalContext>

    </>
  )
}

export default App
