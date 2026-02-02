import title from "@/src/app/componentes/Title";
import Grid from "@/src/app/componentes/Grid";
import { getPopularMovies } from "../../lib/API/tmdb";

export const dynamic = 'force-dynamic';

const FilmesemAlta = async () => {

    const filmes = await getPopularMovies();
    return (
        <>
        <title title="Filmes em Alta"/>
        <Grid filmes={filmes} />
        </>
    )
}

export default FilmesemAlta;