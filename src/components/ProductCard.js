
// ProductCard.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Card, Col, Row } from 'react-bootstrap';

function ProductCard({ product }) {
  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Row>
      <Col md={4} className='mu-5'>
    <Card style={{ width: '16rem', height:'18rem' }} className="product-card m-4">

    <div className='card-img'>
      <img   src={product.imgurl} className='100' alt='fg'/>
    </div>

      <div className='card-body'>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
     
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {cart.find((item) => item.id === product.id) && (
          <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
        )}
    
      </div>
     
    </Card>
    </Col>
    </Row>
  );
}

export default ProductCard;
