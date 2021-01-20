import styles from '../styles.module.css'
import Link from 'next/link'

function Footer(props){
    let comicsNums = [];
    let nums = props.comics.num; 
    for(let i = 0; i<10; i++){
        comicsNums.push(nums-i)
    }
    return(

        <footer className={styles.footer}>
            <h3>Previous 10</h3>
            <ul>
                {comicsNums.map( (comic) =>
                    <Link key={comic} href="/comics/[id].js" as={`/comics/${comic}` }>
                        <a className={styles.footer}>#{comic}</a>
                    </Link>
                )}
            </ul>
           
            <small>@copyright ASAC</small>
        </footer>
    )
}

export default Footer;