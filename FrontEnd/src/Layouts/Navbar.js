import { Container, Navbar, Nav } from "react-bootstrap";
import img1  from "../Assets/logo.png";

const NavBar = () => {
    return (
    <Navbar style={{'background-color': '#0B4B36'}} bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img
        alt=""
        src={img1}
        width="150"
        height="70"
        className="d-inline-block align-top"
        />{' '}
    </Navbar.Brand>
        <Nav.Link href="#home" style={{'color': 'black'}}>LogOut</Nav.Link>
    </Container>
    </Navbar>
    )
}

export default NavBar;