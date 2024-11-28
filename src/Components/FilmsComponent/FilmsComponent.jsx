import { useGlobalContext } from "../../Context/GlobalContext"
import Flag from "react-country-flag";


export default function FilmsComponent() {

    const { getFilms, getSeries } = useGlobalContext()

    console.log(getFilms);


    function star(num) {
        const newNum = Math.round(num / 2)
        if (newNum == 0) {
            return ''
        } else if (newNum == 1) {
            return '🌟'
        }
        else if (newNum == 2) {
            return '🌟🌟'
        } else if (newNum == 3) {
            return '🌟🌟🌟'
        } else if (newNum == 4) {
            return '🌟🌟🌟🌟'
        } else if (newNum == 5) {
            return '🌟🌟🌟🌟🌟'
        }

    }


    return (
        <>

            <h1>Films</h1>
            {getFilms.results?.map((film, index) => (
                <div className="relative w_185" key={index}>

                    <img src={`http://image.tmdb.org/t/p/w185${film.poster_path}`} />
                    <div className="layer">
                        <div className="absolute clolor">
                            <p className="color "><strong>Titolo: </strong>{film.title}</p>
                            <p className="color "><strong>Titolo originale: </strong>{film.original_title}</p>
                            <p className="color "><strong>Lingua: </strong>{<Flag countryCode={film.original_language} svg />}</p>
                            <p className="color "><strong>Descrizione: </strong>{film.overview}</p>
                            <p className="color "><strong>Voto: </strong>{star(film.vote_average)}</p>

                        </div>

                    </div>

                </div>
            ))}


        </>
    )

}