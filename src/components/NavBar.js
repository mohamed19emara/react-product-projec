
// Navbar.js
import React ,{useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import {Navbar , Nav ,Container } from 'react-bootstrap'

const NavBar = ()=> {
  const { user , logout } = useContext(AuthContext);
   
  const handleLogout = () => {
    // Replace this with your logout logic
    logout();
  };
  return (
<>
<Navbar bg="dark" data-bs-theme="dark">
  <Container className='justify-contact-between'>
    <Navbar.Brand href="/">E-comerce</Navbar.Brand>
           
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Checkout">Checkout</Nav.Link>
      {
          user ? (
            <>
            <Nav.Link onClick={handleLogout} href="/Login">logout</Nav.Link>
             <Nav.Link href="/">{user.username}</Nav.Link>
             <Nav.Link href="/ShoppingCart">cart</Nav.Link>
          </>)
           :
          (   
            <Nav.Link href="/SignUp">SignUp</Nav.Link>

            )
        }
    </Nav>
  </Container>
</Navbar>
</>
  );
}
export default NavBar;
