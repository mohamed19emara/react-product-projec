// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import SignUp from './components/SignUp';


function App() {
  return (
    
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout" element={ <Checkout />} />
            <Route path="/thank-you" element={ <ThankYou />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />

          </Routes>
          <Footer />
        </Router>
     
  );
}

export default App;

