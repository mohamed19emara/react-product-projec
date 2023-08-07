
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const  Checkout = ()=> {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Implement your checkout logic here, e.g., sending the order to a server
    // and displaying a "Thank You" page on successful checkout.
    alert('Order placed successfully!');
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
