import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import { GlobalContext } from './Context/GlobalContext'
import FilmsComponent from './Components/FilmsComponent/FilmsComponent'
import SeriesComponent from './Components/SeriesComponent/SeriesComponent'


function App() {


  return (
    <>
      <GlobalContext>
        <HeaderComponent />
        <FilmsComponent />
        <SeriesComponent />


      </GlobalContext>

    </>
  )
}

export default App
