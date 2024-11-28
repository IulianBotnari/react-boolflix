import { useGlobalContext } from "../../Context/GlobalContext"


export default function SeriesComponent() {

    const { getSeries } = useGlobalContext()

    return (
        <>

            <h1>Series</h1>
            {getSeries.results?.map((film, index) => (
                <div key={index}>


                    <p><strong>Titolo:</strong>{film.title}</p>
                    <p><strong>Titolo:</strong>{film.original_title}</p>
                    <p><strong>Titolo:</strong>{film.vote_average}</p>
                    <p><strong>Titolo:</strong>{film.overview}</p>

                </div>
            ))}
        </>
    )

}
