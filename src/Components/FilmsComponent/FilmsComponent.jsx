import { useGlobalContext } from "../../Context/GlobalContext"
import Flag from "react-country-flag";
export default function FilmsComponent() {
    const { getFilms } = useGlobalContext()

    function star(num) {
        const newNum = Math.round(num / 2)
        if (newNum == 0) {
            return ''
        } else if (newNum == 1) {
            return '🌟'
        } else if (newNum == 2) {
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
            <div className="col-6">
                <h1 className="d-flex justify-content-center" >Films</h1>
                <div className="row gx-0 flex-wrap justify-content-center">
                    {getFilms.results?.map((film, index) => (film.poster_path &&
                        <div className="relative w_185 col-4 m-4" key={index}>
                            <img src={`http://image.tmdb.org/t/p/w342${film.poster_path}`} style={{ width: "100%" }} />
                            <div className="layer">
                                <div className="d-none absolute clolor p-3">
                                    <p className="color "><strong>Titolo: </strong>{film.title}</p>
                                    <p className="color "><strong>Titolo originale: </strong>{film.original_title}</p>
                                    <p className="color " maxLength="200"><strong>Lingua: </strong>{<Flag countryCode={film.original_language} svg />}</p>
                                    <p maxLength={20} className="color "><strong>Descrizione: </strong>{film.overview}</p>
                                    <p className="color "><strong>Voto: </strong>{star(film.vote_average)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}