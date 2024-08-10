"use client"

import Link from "next/link";
import styles from './navbar.module.css';
import { usePathname } from "next/navigation";

export default function Navbar() {
   const pathname =  usePathname();
//    console.log(pathname)
    const activeLinks = {
        backgroundColor : "orange",
        color: "white",
        padding: "0 0.5em",
        borderRadius: "5px",
        
    }

  return (
    <main className="">
        <header className={styles.header}>
            <nav className={styles.navbar}>
                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <div className={styles.square}>
                            <div className={styles.dot}></div>
                        </div>
                    </Link>
                </div>

                {/* Nav-links */}
                <div className={styles.navLinks}>
                    <ul className={styles.navLinksWrapper}>
                        <li>
                            <Link href="/" style={pathname === "/" ? activeLinks : null}>Home</Link>
                        </li>

                        <li>
                            <Link href="/movies" style={pathname === "/movies" ? activeLinks : null}>Movies</Link>
                        </li>
                        <li className={styles.searchBarContainer}>
                            <input className={styles.searchBar} type="search" name="search" id="search" placeholder="search latest movies..." />
                            <button type="button" className={styles.searchBarBtn}>Search</button>
                        </li>
                    </ul>
                </div>

                {/* Sign Up */}
                <form className={styles.signUpForm}>
                    <button className={styles.singUpBtn} type="button">Sign up</button>
                </form>
            </nav>
        </header>
    </main>
  )
}
