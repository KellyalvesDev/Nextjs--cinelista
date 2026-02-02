import { Filme } from "@/src/app/types/types";
import Card from "@/src/app/componentes/Card";
import style from "./Grid.module.css";

type Props = {
    filmes: Filme[];
};

const Grid = ({filmes} : Props) => {
    return (
        <section className={style.grid}>
            {filmes.map((filme) => <Card key={filme.id} filme={filme} />)}  
        </section>  
    );
}

export default Grid; 
