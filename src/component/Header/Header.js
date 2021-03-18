import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'

export default function Header() {  
  return (
    <div className="main">
      <Navbar bg="none" variant="dark" className="nav">
        <div className="logo" >
          <Navbar.Brand href="/testTHRIVE/#/home"><img src={window.location.origin + "/testTHRIVE/images/logo.svg"}></img></Navbar.Brand>
        </div>
        <Nav className="mr-auto">
          <Nav.Link href="/testTHRIVE/#/home">home</Nav.Link>
          <Nav.Link href="/testTHRIVE/#/about">about</Nav.Link>
          <Nav.Link href="/testTHRIVE/#/contact">contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}