import styles from "./Title.module.css";

type Props = {
    title : string
}
const title = ({title} : Props ) => {
    return 
         <h2 className={styles.title}>{title}</h2>
    }

export default title;