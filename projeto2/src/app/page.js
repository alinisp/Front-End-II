//import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Bem Vindo a Clínica Plenitude</h1>
        <p className={styles.paragrafo}>
          Seja bem-vindo à Clínica Plenitude! Cuidamos da sua saúde com excelência, carinho e dedicação. Nossa missão é proporcionar bem-estar e qualidade de vida através de um atendimento humanizado, profissionais altamente qualificados e uma estrutura moderna para melhor te atender.
        </p>
      </div>
      <div className={styles.divi}>
        <Link href="/consulta/agendar">
          <button className={styles.button}>Agendar Consulta</button>
        </Link>
      </div>
    </>
  );
}