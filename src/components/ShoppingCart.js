
// ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ShoppingCart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${getTotalPrice()}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
