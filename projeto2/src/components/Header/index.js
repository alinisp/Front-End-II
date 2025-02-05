'use client';
import Link from "next/link";
import styles from "./header.module.css"
import { useState } from "react";
import Image from "next/image";



export default function Header() {
    const [showMenu, setShowMenu] = useState(true)
    return (
        <header >

            {

                showMenu &&

                <nav>

                    <ul className={styles.li}>
                        <Image className={styles.icon}
                            src="/icon.png"
                            alt="logo"
                            width={30}
                            height={30} />
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/medico'>Médico</Link></li>
                        <li><Link href='/paciente'>Paciente</Link></li>
                        <li><Link href='/consulta'>Consulta</Link></li>
                    </ul>
                </nav>
            }
        </header>
    )
}
{/* <li><Link href='/' className={styles.oi}><svg fill="#fff" width="44px" height="44px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-3.193-.767a1.588 1.588 0 1 0-1.999 1.534v1.515a2.014 2.014 0 0 1-4.027 0v-.334a2.676 2.676 0 0 0 2.262-2.64v-2.14a1.244 1.244 0 0 0-.506-1.002.894.894 0 1 0-.395.754.424.424 0 0 1 .08.248v2.14a1.851 1.851 0 1 1-3.703 0v-2.14a.422.422 0 0 1 .1-.273.895.895 0 1 0-.356-.77 1.245 1.245 0 0 0-.565 1.043v2.14a2.676 2.676 0 0 0 2.262 2.64v.334a2.835 2.835 0 1 0 5.67 0v-1.515a1.59 1.59 0 0 0 1.177-1.534zm-.821 0a.767.767 0 1 1-.767-.767.768.768 0 0 1 .767.767z"></path></g></svg></Link></li> */ }