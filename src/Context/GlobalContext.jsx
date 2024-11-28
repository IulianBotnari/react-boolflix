import React, { useState, useContext, createContext, useEffect } from "react"

const context = createContext()


export function GlobalContext({ children }) {
    const [getFilms, setGetFilms] = useState({})

    const [getSeries, setSeries] = useState({})

    const value = {}

    return (
        <context.Provider value={{}}>
            {children}
        </context.Provider>
    )
}


export const useGlobalContext = () => useContext(context)