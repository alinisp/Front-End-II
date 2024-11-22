import styles from "./sobre.module.css";

export default function Sobre() {
    return (
        <main>
            <h1>Qual a personalidade dos pinguins de Madagascar?</h1>
            <p className={styles.paragrafo}>Capitão, Kowalski, Rico e Recruta ainda acham que são uma tropa de elite dentro do zoológico do Central Park. Quando não estão entretendo os humanos, os irmãos pinguins partem para missões nas perigosas ruas de Nova York.</p>
            <p id={styles.paragrafoUnico}> Meu paragrafo especial</p>
        </main>   
    )

}