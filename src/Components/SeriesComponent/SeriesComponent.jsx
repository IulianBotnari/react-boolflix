import { useGlobalContext } from "../../Context/GlobalContext"
import Flag from 'react-world-flags'


export default function SeriesComponent() {

    const { getSeries } = useGlobalContext()

    return (
        <>

            <h1>Series</h1>
            {getSeries.results?.map((serie, index) => (
                <div key={index}>


                    <p><strong>Titolo: </strong>{serie.name}</p>
                    <p><strong>Titolo originale: </strong>{serie.original_name}</p>
                    <p><strong>Lingua: </strong>{<Flag key={serie.original_language} code={serie.original_language} style={{ width: 32, height: 32 }} />}</p>
                    <p><strong>Descrizione: </strong>{serie.overview}</p>
                    <p><strong>Voto: </strong>{serie.vote_average}</p>

                </div>
            ))}
        </>
    )

}
