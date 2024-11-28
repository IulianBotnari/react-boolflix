import React, { Outlet, useState } from "react";
import { useGlobalContext } from "../Context/GlobalContext";




export default function Layout() {
    const { handleFilmSearch } = useGlobalContext()




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


                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Cerca
                    </button>


                </form>

            </header>


            <main>

            </main>



            <footer>
                <p>�� 2023 My Website</p>
            </footer>





        </>
    )
}