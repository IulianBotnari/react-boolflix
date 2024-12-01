import { useGlobalContext } from "../../Context/GlobalContext"
import { useState } from "react";


export default function FilterByGenderComponent() {

    const {
        getFilms,
        setdisplayFilm,
        setDisplayGenreFilm,
        setSelectFilmByGender,
        getSeries,
        setSelectSerieByGender,
        setDisplayGenreSries,
        setDisplaySeries
    } = useGlobalContext()

    const [genereFilm, setGenereFilm] = useState('');
    const [genereSerie, setGenereSerie] = useState('');

    console.log(getSeries.results);



    function filterFilmsByGender(e) {
        e.preventDefault();
        const filteredFilms = getFilms.results.filter(film =>
            film.genre_ids.includes(parseInt(genereFilm))

        );

        setSelectFilmByGender(filteredFilms);
        if (genereFilm === "null") {
            setDisplayGenreFilm('d-none');
            setdisplayFilm('')

        } else {
            setdisplayFilm('d-none');
            setDisplayGenreFilm('');
        }

    }


    function filterSeriesByGender(e) {
        e.preventDefault();

        const filteredSeries = getSeries.results.filter(serie =>
            serie.genre_ids.includes(parseInt(genereSerie))
        );
        console.log(filteredSeries);
        setSelectSerieByGender(filteredSeries);
        if (genereSerie === "null") {
            setDisplayGenreSries('d-none');
            setDisplaySeries('')

        } else {
            setDisplaySeries('d-none');
            setDisplayGenreSries('');
        }

    }


    return (

        <div className="d-flex justify-content-around bg-secondary p-3">
            <form className="d-flex my-2" onSubmit={filterFilmsByGender}>

                <select className="form-select" aria-label="Default select example" value={genereFilm} onChange={(e) => setGenereFilm(e.target.value)}>
                    <option value="">Seleziona genere</option>
                    <option value="null">All</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="10769">Mystery</option>
                    <option value="10765">Romance</option>
                    <option value="27">Horror</option>
                    <option value="10752">Thriller</option>
                    <option value="10759">War</option>
                    <option value="10770">Western</option>


                </select>
                <button type="submit" className="btn btn-light mx-3" >Cerca Film</button>


            </form>

            <form className="d-flex my-2" onSubmit={filterSeriesByGender}>

                <select className="form-select" aria-label="Default select example" value={genereSerie} onChange={(e) => setGenereSerie(e.target.value)}>
                    <option value="">Seleziona genere</option>
                    <option value="null">All</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="10769">Mystery</option>
                    <option value="10765">Romance</option>
                    <option value="27">Horror</option>
                    <option value="10752">Thriller</option>
                    <option value="10759">War</option>
                    <option value="10770">Western</option>
                </select>
                <button type="submit" className="btn btn-light mx-3" >Cerca Serie</button>


            </form>
        </div>
    )
}