import { get } from "http";
import Grid from "./componentes/Grid";
import title from "./componentes/Title";
import {filmes} from "./lib/filmes";
import { getTrendinMovies } from "./lib/API/tmdb";


export default async function Home() {
  const filmes = await getTrendinMovies ();
  return (
    <>
    <title title="Filmes em destaque"/>
    <Grid filmes={filmes} />

    </>
  );
} 
