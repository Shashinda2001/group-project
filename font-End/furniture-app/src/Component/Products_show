import React from 'react';
import '../css/productsshow.css';
import { useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

     

const Products = ({
   onAddToCart, onAddToWishlist }) => {
  const [productData, setProductData] = useState([
    { 
      id: 1, 
      name: 'Sofa Bed development', 
      image: 'https://m.media-amazon.com/images/I/81d90JW-LfL.__AC_SX300_SY300_QL70_FMwebp_.jpg', 
      price: 40, 
      quantity: 1 
    },
    { 
      id: 2, 
      name: 'Kot chair production', 
      image: 'https://m.media-amazon.com/images/I/91FH47-BbwL.__AC_SX300_SY300_QL70_FMwebp_.jpg', 
      price: 50, 
      quantity: 2 
    },
    { 
      id: 3, 
      name: 'Modern Fabric Accent Chair', 
      image: 'https://m.media-amazon.com/images/I/61d2rgoL4CL.__AC_SX300_SY300_QL70_FMwebp_.jpg', 
      price: 78, 
      quantity: 1 
    },
    { 
      id: 4, 
      name: 'A Frame Computer Desk', 
      image: 'https://m.media-amazon.com/images/I/71mJ-owgDlL.__AC_SX300_SY300_QL70_FMwebp_.jpg', 
      price: 76, 
      quantity: 1 
    },
    { 
      id: 5, 
      name: 'Bathroom capboard', 
      image: 'https://m.media-amazon.com/images/I/71vAmA4XAXL._AC_SX679_.jpg', 
      price: 20, 
      quantity: 1 
    },{ 
      id: 5, 
      name: 'Bathroom capboard', 
      image: 'https://m.media-amazon.com/images/I/71vAmA4XAXL._AC_SX679_.jpg', 
      price: 20, 
      quantity: 1 
    },
    { 
      id: 5, 
      name: 'Bathroom capboard', 
      image: 'https://m.media-amazon.com/images/I/71vAmA4XAXL._AC_SX679_.jpg', 
      price: 20, 
      quantity: 1 
    }
    ,{ 
      id: 5, 
      name: 'Bathroom capboard', 
      image: 'https://m.media-amazon.com/images/I/71vAmA4XAXL._AC_SX679_.jpg', 
      price: 20, 
      quantity: 1 
    },
    { 
      id: 5, 
      name: 'Bathroom capboard', 
      image: 'https://m.media-amazon.com/images/I/71vAmA4XAXL._AC_SX679_.jpg', 
      price: 20, 
      quantity: 1 
    }
  ]);
  
  return (
     <div>
      <h1 className='heading'>Welcome to our <br /><span>trustest products</span></h1>
      <div className="product-list">
      {productData.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <div className="product-buttons">
              <button onClick={() => onAddToCart(product.id)} className="add-to-cart"><FaShoppingCart /></button>
              <button onClick={() => onAddToWishlist(product.id)} className="add-to-wishlist"><FaHeart /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
     </div>
  );
};

 

export default Products;
