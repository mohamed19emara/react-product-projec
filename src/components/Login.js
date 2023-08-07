// Login.js
import React, { useContext , useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate} from 'react-router-dom'
import {Container , Form , Button} from 'react-bootstrap'

const  Login = ()=> {
  const [username, setUsername] = useState('');

  const { login } = useContext(AuthContext);

  const  Navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
    Navigate( "/" , {replace :true} )
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <Form className="p-4 border rounded shadow">
      <h2 className="mb-4">Login</h2>
      <Form.Group controlId="formBasicEmail">

      <Form.Group controlId="formBasicPassword">
        <Form.Label>username</Form.Label>
        <Form.Control type="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </Form.Group>

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  </Container>
  );
}

export default Login;







// <input
// className='text-center d-block'
//   type="text"
//   placeholder="Username"
//   value={username}
//   onChange={(e) => setUsername(e.target.value)}
// />

