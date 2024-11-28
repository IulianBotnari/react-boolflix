import { useGlobalContext } from "../../Context/GlobalContext"
import Flag from "react-country-flag";


export default function FilmsComponent() {

    const { getFilms, getSeries } = useGlobalContext()

    console.log(getFilms);


    return (
        <>

            <h1>Films</h1>
            {getFilms.results?.map((film, index) => (
                <div key={index}>


                    <p><strong>Titolo: </strong>{film.title}</p>
                    <p><strong>Titolo originale: </strong>{film.original_title}</p>
                    <p><strong>Lingua: </strong>{<Flag countryCode={film.original_language} svg />}</p>
                    <p><strong>Descrizione: </strong>{film.overview}</p>
                    <p><strong>Voto: </strong>{film.vote_average}</p>
                    <img src={`http://image.tmdb.org/t/p/w185${film.poster_path}`} />

                </div>
            ))}


        </>
    )

}