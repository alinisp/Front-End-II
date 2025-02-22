//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Bem Vindo a Clínica Plenitude</h1>
      <div className={styles.divi}>
        <p className={styles.paragrafo}>
          Cuidando da sua saúde com excelência e carinho! Na Clínica Plenitude, nosso compromisso é com o seu bem-estar. Contamos com uma equipe de profissionais altamente qualificados e uma estrutura moderna para oferecer o melhor atendimento médico.
        </p>
      </div>
    </div>
  );
}