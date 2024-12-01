import React, { useState, useContext, createContext, useEffect } from "react"
const context = createContext()
export function GlobalContext({ children }) {

    // API setting
    const [getFilms, setGetFilms] = useState({})
    const [getSeries, setSeries] = useState({})
    const [query, setQuery] = useState('')

    //display setting
    const [displayGenreFilm, setDisplayGenreFilm] = useState('');
    const [displayFilm, setdisplayFilm] = useState('')
    const [displayGenreSeries, setDisplayGenreSries] = useState('');
    const [displaySeries, setDisplaySeries] = useState('')

    //filter setting
    const [selectFilmByGender, setSelectFilmByGender] = useState([])
    const [selectSerieByGender, setSelectSerieByGender] = useState([])

    async function handleFilmSearch(e) {
        e.preventDefault()

        // get films fetch
        try {
            const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=' + query)
            const data = await response.json()
            setGetFilms(data)
        }
        catch (error) {
            console.error('Error:', error)
        }

        //get series fetch
        try {
            const response = await fetch('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=' + query)
            const data = await response.json()
            setSeries(data)
        }
        catch (error) {
            console.error('Error:', error)
        }
    }



    const value = {
        //export display setting
        setDisplayGenreFilm,
        setdisplayFilm,
        setDisplaySeries,
        setDisplayGenreSries,

        // export films filter
        setSelectFilmByGender,
        selectFilmByGender,

        //export series filter
        setSelectSerieByGender,
        selectSerieByGender,

        //export display value
        displayGenreFilm,
        displayFilm,
        displaySeries,
        displayGenreSeries,

        //export API data
        handleFilmSearch,
        setQuery,
        getFilms,
        getSeries,
    }
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}

export const useGlobalContext = () => useContext(context)



