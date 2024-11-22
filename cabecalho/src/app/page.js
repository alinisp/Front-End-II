// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const nome = 'Alini'
  return (
    <div >
      <h1>Pinguins de Madagascar!</h1>
      <p>Membros: Capitão, Recruta, Kowalski e Rico</p>
      <p>Autor: {nome}</p>
      <Image 
        className={styles.imagem}
        src="/images/pinm.jpg" alt="Imagem de pinguins"
        width={600} 
        height={400} />
    </div>
  );
}

