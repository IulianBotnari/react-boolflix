import './App.css'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import { GlobalContext } from './Context/GlobalContext'
import FilmsComponent from './Components/FilmsComponent/FilmsComponent'
import SeriesComponent from './Components/SeriesComponent/SeriesComponent'
import FilterByGenderComponent from './Components/FilterByGebderComponent/FilterByGenderComponent'
function App() {
  return (
    <>
      <GlobalContext>
        <HeaderComponent />
        <main>

          <FilterByGenderComponent />
          <div className='d-flex '>

            <FilmsComponent />
            <SeriesComponent />
          </div>

        </main>
      </GlobalContext>
    </>
  )
}

export default App
