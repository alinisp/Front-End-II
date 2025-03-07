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
export default function Listas() {
    const racas = ['Vira-lata', 'Pit-bull', 'Pug', 'Shitzu', 'Labrador']

    const racasObjt = [
        {
            id:1,
            raca: "Vira-lata",
        },
        {
            id:2,
            raca: "Pit-bull",
        },
        {
            id:3,
            raca: "Pug",
        },
        {
            id:4,
            raca: "Shitzu",
        },
        {
            id:5,
            raca: "Labrador",
        }   
    ]
    return (
        <div style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>Listas</h1>
            <p>{racasObjt[0].raca}</p>
            <h2>Lista Comum</h2>
            <ul>
                {racas.map((raca, i) => (
                    <li key={i}> {i+1} - {raca}</li>
                ))}
            </ul>
            <div>
                <h2>Lista de Objetos</h2>
                {racasObjt.map((racasObjt) =>(
                    <div key={racasObjt.id}>
                        <h3>{racasObjt.id}</h3>
                        <p>{racasObjt.raca}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}