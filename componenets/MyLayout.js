import Header from '../componenets/Header'


export default props => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            background-color: rgb(255, 250, 240);

        `}</style>
    </div>
)
