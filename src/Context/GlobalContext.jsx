import React, { useState, useContext, createContext, useEffect } from "react"
const context = createContext()
export function GlobalContext({ children }) {
    const [getFilms, setGetFilms] = useState({})
    const [getSeries, setSeries] = useState({})
    const [query, setQuery] = useState('')

    async function handleFilmSearch(e) {
        e.preventDefault()
        try {
            const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=' + query)
            const data = await response.json()
            setGetFilms(data)
        }
        catch (error) {
            console.error('Error:', error)
        }
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