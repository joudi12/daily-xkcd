import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles.module.css'
import Link from 'next/link'


function Header(props){
    return(
        <>
       <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#about">About Us</Nav.Link>
        </Nav>
       </Navbar>  
      </>
    )
}

export default Header;