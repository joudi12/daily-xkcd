import styles from '../styles.module.css'
import Header from '../componenets/Header'
import Footer from '../componenets/Footer'
import MyLayout from '../componenets/MyLayout'
export default function Home(props) {
  return (
        <MyLayout>
          <div className={styles.main}>
            <h1>XKCD</h1>
            <h1>{props.comics.safe_title}</h1>
            <img src={props.comics.img}></img>

            <Footer comics={props.comics}/>
          </div>
        </MyLayout>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://xkcd.com/2413/info.0.json')
  const dataObj = await res.json();
  console.log(dataObj);
  return { props: {comics: dataObj} };
}