import { useGlobalContext } from "../../Context/GlobalContext"
import Flag from 'react-country-flag'
export default function SeriesComponent() {
    const { getSeries } = useGlobalContext()

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

    function languages(language) {
        if (language === "en") {
            return "GB"
        } else {
            return language
        }

    }
    return (
        <>
            <div className="col-6">
                <h1 className="d-flex justify-content-center">Series</h1>
                <div className="row gx-0 flex-wrap justify-content-center">
                    {getSeries.results?.map((serie, index) => (serie.poster_path &&
                        <div className="relative w_185 col-4 m-4 " key={index}>
                            <img className="img_border" src={`http://image.tmdb.org/t/p/w342${serie.poster_path}`} style={{ width: "100%" }} />
                            <div className="layer">
                                <div className="d-none absolute color p-3">
                                    <p className="color"><strong>Titolo: </strong>{serie.name}</p>
                                    <p className="color"><strong>Titolo originale: </strong>{serie.original_name}</p>
                                    <p className="color"><strong>Lingua: </strong>{<Flag countryCode={languages(serie.original_language)} svg />}</p>
                                    <p className="color"><strong>Descrizione: </strong>{serie.overview}</p>
                                    <p className="color"><strong>Voto: </strong>{star(serie.vote_average)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}
