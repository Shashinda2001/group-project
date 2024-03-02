import React, { useState } from 'react';
import '../css/card.css';


const Product = ({ name,   image, price, onIncrease, onDecrease,quantity }) => (
  <div style={{   margin: '10px', padding: '10px' }} className='product'>
  
              <td> 
                   <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
                   <h4>{name}</h4>
              </td>
              <td className='prize_btn'>
                <p> ${price}</p>
                </td>
              <td className='increse_degrese_qu'> 
                   <button onClick={onIncrease} className='increse'>+</button>
                    <h3>  {quantity}</h3>
                    <button onClick={onDecrease} className='decrese'>-</button>
                    
              </td>
               <td className='remove_btn'>
                   <button className='btn2'>Remove</button></td>
             
           
        
    
    
     
     
   
 
    
  </div>
);

 


const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sofa Bed development   ',  image: ' https://m.media-amazon.com/images/I/81d90JW-LfL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price:40, quantity: 1 },
    { id: 2, name: 'Kot chair  production',  image: 'https://m.media-amazon.com/images/I/91FH47-BbwL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price: 50, quantity: 2 },
    { id: 3, name: 'Modern Fabric Accent Chair',  image: 'https://m.media-amazon.com/images/I/61d2rgoL4CL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price: 78, quantity: 1 },
    { id: 4, name: ' A Frame Computer Desk',  image: 'https://m.media-amazon.com/images/I/71mJ-owgDlL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price: 76, quantity: 1 },
    { id: 5, name: 'Bathroom capboard',  image: 'https://m.media-amazon.com/images/I/71vAmA4XAXL._AC_SX679_.jpg', price: 20, quantity: 1 },
  ]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    products.forEach(product => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  

  const handleIncreaseQuantity = (productId) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product

    ));

    
  };

  const handleDecreaseQuantity = (productId) => {
    setProducts(products.map(product =>
      product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    ));
  };

  const redirectToAnotherWebsite = () => {
    window.location.href = '. /Checkout.jsx';
  };
  return (
      <div className='main_home'> 
          <h1   className='heading'>Shopping Cart</h1>
     <div className='card_container'>
          <div className='selected_protects_container'>
         
        <table>
        <thead>
          <tr>
            <th  >Project </th>
            <th  >Price</th>
            <th className='title' style={{padding:0}}>Quantity</th>
             
          </tr>
        </thead>
            </table>
            <table>
              <tbody>
                <tr>
                {products.map(product => (
              <Product
                key={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                onIncrease={() => handleIncreaseQuantity(product.id)}
                onDecrease={() => handleDecreaseQuantity(product.id)}
                quantity={product.quantity}
              />
            ))}
                </tr>
              
              </tbody>
            </table>
         
        </div>
        <div className='totel_details'>
           <div className='totel_prize'>
           <h3 className='selected_protect'>Selected Products</h3>
            <ul className='shopping-cart'>
              {products.map(product => (
                 <li key={product.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span >{product.name}</span>
                 <span className='quantity'>Quantity:<span className='quantity1'> {product.quantity}</span></span>
               </li>
              ))}
            </ul>
            <h1>totle: ${calculateTotalPrice()}</h1>
            <button className='btn1' onClick={redirectToAnotherWebsite } >CheckOut</button>
           </div>
        </div>
     </div>
     </div>
  );
};

export default ShoppingCart;
