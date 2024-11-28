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

    return (
        <>

            <h1>Series</h1>
            {getSeries.results?.map((serie, index) => (
                <div className="relative w_185" key={index}>
                    <img src={`http://image.tmdb.org/t/p/w185${serie.poster_path}`} />

                    <div className="layer">

                        <div className="absolute color">



                            <p className="color"><strong>Titolo: </strong>{serie.name}</p>
                            <p className="color"><strong>Titolo originale: </strong>{serie.original_name}</p>
                            <p className="color"><strong>Lingua: </strong>{<Flag countryCode={serie.original_language} svg />}</p>
                            <p className="color"><strong>Descrizione: </strong>{serie.overview}</p>
                            <p className="color"><strong>Voto: </strong>{star(serie.vote_average)}</p>

                        </div>

                    </div>

                </div>
            ))}
        </>
    )

}
