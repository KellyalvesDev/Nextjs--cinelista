import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./Detalhefilme.module.css";
import { getMoviesDatails } from "../../lib/API/tmdb";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: Props) => {
  const id = Number(params.id);
  const details = await getMoviesDatails(id);

  if (!details) {
    return {
      title: "Filme não encontrado",
    };
  }

  return {
    title: `${details.title} | Cinelista`,
    description: details.overview,
    openGraph: {
      title: `${details.title} | Cinelista`,
      description: details.overview,
      images: [
        `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`,
      ],
    },
  };
};

const DetalheFilme = async ({ params }: Props) => {
  const id = Number(params.id);
  const details = await getMoviesDatails(id);

  if (!details) return notFound();

  const { title, poster_path, overview } = details;

  return (
    <div className={styles.detalhes}>
      <div className={styles.detalhes__conteiner}>
        <Link className={styles.detalhe__voltar} href="/">
          Voltar
        </Link>

        <section>
          <figure>
            <img
              className={styles.detalhes__image}
              src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
              alt={`Poster do filme: ${title}`}
            />
          </figure>

          <article className={styles.detalhes__info}>
            <h2>{title}</h2>
            <p>{overview}</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default DetalheFilme;
