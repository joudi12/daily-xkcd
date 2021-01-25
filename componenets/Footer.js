import styles from '../styles.module.css'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'

// import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

function Footer(props){
    let comicsNums = [];
    let nums = props.comics.num; 
    for(let i = 0; i<10; i++){
        comicsNums.push(nums-i)
    }
    return(
        <>
            <footer >
                <h3>Previous 10</h3>
                <ul>
                    {comicsNums.map( (comic) =>
                    <>
                        <Button variant="danger" className={styles.button}>
                        {<Link key={comic} href="/comics/[id].js" as={`/comics/${comic}` }>
                            <a >#{comic}</a>
                        </Link>}
                        </Button>
                        <Overlay  placement="right">
                        {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                            {...props}
                            style={{
                            backgroundColor: 'rgba(255, 10, 110, 0.85)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                            }
                        }
                        >
                            Simple tooltip
                        </div>
                        )}
                        </Overlay>
                        
                    </>
                    )}
                </ul>

            </footer>
        </>
    )
}

export default Footer;