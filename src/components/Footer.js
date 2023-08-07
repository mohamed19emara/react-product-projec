
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ()=>{
    return(
       <footer className="footer bg-dark mt-5 py-3"  style={{color:"#fff"}}>
      <Container fluid>
        <Row>
          <Col md={4}>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <h3>Contact</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </Col>
          <Col md={4}>
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-text text-center mt-3">
        &copy; 2023 MyWebsite. All rights reserved.
      </div>
    </footer>


    )
}
export default Footer;

         //style={{position:"relative", bottom:"0",color:"#fff"}}