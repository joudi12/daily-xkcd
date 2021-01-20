import Link from 'next/link'
import MyLayout from '../../componenets/MyLayout'

export default function ComicDetails(props){
    return (
        <MyLayout>
            <h1>{props.comic.title}</h1>
            <img src={props.comic.img}></img>
        </MyLayout>
    )
}

export async function getServerSideProps(context){
    const id = context.query.id
    console.log(id)
    const res = await fetch(`https://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: {comic: dataObj} };
}