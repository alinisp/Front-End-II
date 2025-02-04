import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const nome = 'Alini Perroni'
  return (
    <div >
      <h1 className={styles.tit}>Clínica Médica</h1>
      <p>Clínica psiquiatrica </p>
      <p>Médica: {nome}</p>
      <Image 
        className={styles.imagem}
        src="" alt="Imagem de pinguins"
        width={600} 
        height={400} />
    </div>
  );
}
