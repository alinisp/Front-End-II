'use client';
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.icon}
        src="/icon.png"
        alt="logo"
        width={40}
        height={40}
      />
      <h2 className={styles.agadois}>Clínica Plenitude</h2>
      <nav>
        <ul className={styles.navList}>
          <li><Link href='/'>Home</Link></li>
          <li className={styles.item}> {/* Adicionei a classe "item" aqui */}
            <Link href='/medico' className={styles.link}>Médico</Link>
            <ul className={styles.submenu}>
              <li className={styles.subitem}>
                <Link href="/medico/agenda" className={styles.sublink}>Listar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/criar" className={styles.sublink}>Criar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/editar" className={styles.sublink}>Editar</Link>
              </li>
              <li className={styles.subitem}>
                <Link href="/medico/excluir" className={styles.sublink}>Excluir</Link>
              </li>
            </ul>
          </li>
          <li><Link href='/paciente'>Paciente</Link></li>
          <li><Link href='/consulta'>Consulta</Link></li>
        </ul>
      </nav>
    </header>
  );
}
//bito