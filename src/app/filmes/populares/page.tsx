import title from "@/src/app/componentes/Title";
import Grid from "@/src/app/componentes/Grid";
import { getPopularMovies } from "../../lib/API/tmdb"; 

export const revalidate = 60; //atualiza a cada 60 segundos

const FilmesPopulares = async () => {

    const filmes = await getPopularMovies();

    return (
        <>
            <title title="Filmes Populares"/>
            <Grid filmes={filmes} />
        </>
    )
}
export default FilmesPopulares;