'use client';
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false); // Estado para controlar a visibilidade do menu

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.icon}
          src="/icon.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h2 className={styles.agadois}>Clínica Plenitude</h2>
      </div>

      {/* Botão do menu para mobile */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu de navegação */}
      <nav className={`${styles.nav} ${showMenu ? styles.showMenu : ''}`}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <a href="/" className={styles.link}>Home</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Médico</a>
            <ul className={styles.submenu}>
              <li><a href="/medico/listar" className={styles.submenuItem}>Listar</a></li>
              <li><a href="#" className={styles.submenuItem}>Adicionar</a></li>
              <li><a href="#" className={styles.submenuItem}>Editar</a></li>
              <li><a href="#" className={styles.submenuItem}>Excluir</a></li>
            </ul>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Paciente</a>
            <ul className={styles.submenu}>
              <li><a href="/paciente/listar" className={styles.submenuItem}>Listar</a></li>
              <li><a href="#" className={styles.submenuItem}>Adicionar</a></li>
              <li><a href="#" className={styles.submenuItem}>Editar</a></li>
              <li><a href="#" className={styles.submenuItem}>Excluir</a></li>
            </ul>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Consulta</a>
            <ul className={styles.submenu}>
              <li><a href="/consulta/listar" className={styles.submenuItem}>Listar Consultas</a></li>
              <li><a href="#" className={styles.submenuItem}>Agendar</a></li>
              <li><a href="#" className={styles.submenuItem}>Reagendar</a></li>
              <li><a href="#" className={styles.submenuItem}>Cancelar</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
//bito