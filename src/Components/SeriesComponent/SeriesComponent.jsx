import { useGlobalContext } from "../../Context/GlobalContext"
import Flag from 'react-country-flag'


export default function SeriesComponent() {

    const { getSeries } = useGlobalContext()

    return (
        <>

            <h1>Series</h1>
            {getSeries.results?.map((serie, index) => (
                <div key={index}>


                    <p><strong>Titolo: </strong>{serie.name}</p>
                    <p><strong>Titolo originale: </strong>{serie.original_name}</p>
                    <p><strong>Lingua: </strong>{<Flag countryCode={serie.original_language} svg />}</p>
                    <p><strong>Descrizione: </strong>{serie.overview}</p>
                    <p><strong>Voto: </strong>{serie.vote_average}</p>
                    <img src={`http://image.tmdb.org/t/p/w185${serie.poster_path}`} />

                </div>
            ))}
        </>
    )

}
