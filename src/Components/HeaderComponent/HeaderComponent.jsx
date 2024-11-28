import React, { useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import { Outlet } from "react-router";




export default function HeaderComponent() {
    const { handleFilmSearch, setQuery } = useGlobalContext()

    function getQuery(e) {
        setQuery(e.target.value)
    }




    return (

        <>
            <header className="d-flex justify-content-between p-4 bg-dark align-items-center">
                <img src="/Logo.png" />


                <form onSubmit={(e) => handleFilmSearch(e)} className="d-flex jus" style={{ height: '40px' }} >

                    <input
                        type="text"
                        className="form-control me-2"
                        name="search-bar"
                        id="search-bar"
                        aria-describedby="helpId"
                        placeholder=""
                        onChange={(e) => getQuery(e)}


                    />
                    <button
                        type="submit"
                        className="btn btn-light"
                    >
                        Cerca
                    </button>


                </form>

            </header>





        </>
    )
}