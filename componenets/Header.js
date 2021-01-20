  
import styles from '../styles.module.css'
import Link from 'next/link'

function Header(props){
    return(
        <header className={styles.header}>
            <nav>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;