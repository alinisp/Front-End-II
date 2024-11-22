'use client';
import Link from "next/link";
import styles from "./header.module.css"
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header >
            <button onClick={() => setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu &&
                <nav>
                    <ul className={styles.jabu}>
                        <li><Link href='/' className={styles.link}>Home</Link></li>
                        <li><Link href='/sobre' className={styles.link}>Sobre</Link></li>
                        <li><Link href='/contato' className={styles.link}>Contato</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}
