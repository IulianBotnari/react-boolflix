import './App.css'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import { GlobalContext } from './Context/GlobalContext'
import FilmsComponent from './Components/FilmsComponent/FilmsComponent'
import SeriesComponent from './Components/SeriesComponent/SeriesComponent'
function App() {
  return (
    <>
      <GlobalContext>
        <HeaderComponent />

        <main className='d-flex'>
          <FilmsComponent />
          <SeriesComponent />
        </main>
      </GlobalContext>
    </>
  )
}

export default App
