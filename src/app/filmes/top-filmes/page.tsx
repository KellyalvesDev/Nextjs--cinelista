import title from "@/src/app/componentes/Title";
import Grid from "@/src/app/componentes/Grid";
import { getTopMovies } from "../../lib/API/tmdb";

export const dynamic = 'force-dynamic';

const TopFilmes = async () => {

    const filmes = await getTopMovies();

    return (
        <>
            <title title="Top Filmes"/>
            <Grid filmes={filmes} />
        </>
    )
}
export default TopFilmes;