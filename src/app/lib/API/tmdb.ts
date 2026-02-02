import { Filme } from "@/src/app/types/types";
import axios from "axios";

type data = {
    results: Filme[]
}

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "pt-BR",
  },
});


export const getTrendinMovies = async () => {

    const res = await tmdbApi.get<data> ("/trending/movie/week?language=pt-BR")
    
    return res.data.results;
}


export const getMoviesDatails = async (id : number) : Promise<Filme | undefined> => {

    const res = await tmdbApi.get<Filme> (`/movie/${id}?language=pt-BR`)
    
    return res.data;
}

export const getNowPlaying = async (id : number) : Promise<Filme | undefined> => {

    const res = await tmdbApi.get<Filme> (`/movie/now_playing?language=pt-BR`)
    
    return res.data;
}

export const getPopularMovies = async (): Promise<Filme[]> => {

    const res = await tmdbApi.get(`/movie/popular?language=pt-BR`)

    return res.data.results;
}


export const getTopMovies = async (): Promise<Filme[]> => {

   const res = await tmdbApi.get(`/movie/top_rated?language=pt-BR`)

   return res.data.results;

}
