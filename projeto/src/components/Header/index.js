'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header>
            <button onClick={()=>setShowMenu(!showMenu)}>Clique</button>
            {
                showMenu &&
                <nav>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/sobre'>Sobre</Link></li>
                        <li><Link href='/contato'>Contato</Link></li>
                        <li><Link href='/listas'>Listas</Link></li>
                        <li><Link href='/props'>Props</Link></li>
                        <li><Link href='/filter'>filter</Link></li>
                        <li><Link href='/efeitos'>Efeitos</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}