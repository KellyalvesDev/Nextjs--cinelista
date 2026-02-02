import { Filme } from "@/src/app/types/types";
import style from "./Card.module.css";
import Link from "next/link";

type Props = {
    filme: Filme
};


const card = ({filme} : Props) => {
    const {id, title, poster_path, overview, vote_average} = filme;
    const resume = overview?.length >= 256 ? overview.substring(0, 253) + "..." : overview;
    return ( 
        <div className={style.card} key = {id}>
          <Link href= {`/filme/${id}`}>
            <img className={style.card__poster} 
            src= {`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`} 
            alt={'Poster do filme ${title}'} width = {300} height= {200} />
            <div className= {style.card__info}>
                <h3 className={style.card__title}>{title}</h3>
                <p className={style.card__description}>{resume}</p>
                <p className={style.card__vote_average}>Nota: {vote_average}</p>
            </div>
          </Link>
        </div>
    )
}

export default card;