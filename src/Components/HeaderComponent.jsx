import React, { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import { Outlet } from "react-router";




export default function HeaderComponent() {
    const { handleFilmSearch, setQuery } = useGlobalContext()

    function getQuery(e) {
        setQuery(e.target.value)
    }




    return (

        <>
            <header>
                <h1>Logo</h1>


                <form onSubmit={(e) => handleFilmSearch(e)} className="mb-3">
                    <label htmlFor="search-bar" className="form-label">Cerca</label>
                    <input
                        type="text"
                        className="form-control"
                        name="search-bar"
                        id="search-bar"
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e) => getQuery(e)}


                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Cerca
                    </button>


                </form>

            </header>





        </>
    )
}