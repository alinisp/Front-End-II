import styles from './card.module.css'
export default function Card({nome, raca, peso, cor}){
    return(
        <div className={styles.div}>
            <h2 className={styles.aga2}>{nome}</h2>
            <p>{raca}</p>
            <p>{peso}</p>
            <p>{cor}</p>
        </div>
    )
}