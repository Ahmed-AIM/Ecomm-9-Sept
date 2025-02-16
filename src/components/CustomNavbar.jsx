import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function CustomNavbar() {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ecommerce
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">
            Wishlist <Badge bg="danger">9</Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="cart">
            Cart{" "}
            <Badge bg="warning" text="dark">
              {cart.length}
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
