import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
    return (
        <div style={{ marginLeft: '3%', marginTop: '3%', zIndex: '2', position: 'absolute', color: 'white'}}>
        <Navbar bg="none" variant="dark" style={{ fontSize: '15px'}}>
          <div style={{ marginRight: '2%' }} >
            <Navbar.Brand href="/home"><img src="http://localhost:3000/logo.svg" ></img></Navbar.Brand>
          </div>
          <Nav className="mr-auto">
            <Nav.Link href="/testTHRIVE/#/home">home</Nav.Link>
            <Nav.Link href="/testTHRIVE/#/shop">shop</Nav.Link>
            <Nav.Link href="/testTHRIVE/#/about">about</Nav.Link>
            <Nav.Link href="/testTHRIVE/#/contact">contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
}