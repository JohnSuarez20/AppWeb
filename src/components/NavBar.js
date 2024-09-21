import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/mascotas">Adóptame</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
