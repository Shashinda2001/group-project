import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

function CartItems() {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const decoded = jwtDecode(token);
        const response = await axios.get(`http://localhost:8090/api/Cart/user/${decoded.userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart Items</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px' }}>User ID</th>
            <th style={{ textAlign: 'left', backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px' }}>Product ID</th>
            <th style={{ textAlign: 'left', backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(cartItem => (
            <tr key={cartItem.id} style={{ transition: 'all 0.3s' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{cartItem.userId}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{cartItem.productId}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', transition: 'all 0.3s' }}>{cartItem.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartItems;
