import item from '../Assets/chair 3.png';
import item2 from '../Assets/chair-2.png';
import item3 from '../Assets/Chair.png';
import '../css/ProductCard.css';
 

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {

   function cutName(image){
    let filePath =image;
      const fileName = filePath.match(/[^\\]*$/)[0];
      const extractedFileName = fileName.split("\\").pop();
    return extractedFileName;
   }
   
   
   const addToCart = (productId) => {
    console.log(productId); // Log productId to console
    // You can add your logic for adding the product to the cart here
  };



  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/products/all');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
       
   
    };

    fetchProducts();
  }, []);

  return (
    <div>

      <div style={{ display: 'flex',width:'90%',flexWrap:'wrap' }}>

      {products.map((product, index) => (
       
        

<div className="wrapper" key={index}>
<div className="container">
  <div className="top" style={{
    height: '60%',
    width: '100%',
     
    backgroundSize: 'cover'
  }}><img src={"/images/" + cutName(product.imageName)} alt="Product" />
  </div>
  <div className="bottom">
    <div className="left">
      <div className="details">
        <h5>{product.name}</h5>
        <p>Rs.{product.price}</p>
      </div>
      <button type="button" class="btn btn-outline-primary" onClick={() => addToCart(product.productId)} >add to cart</button>
    </div>

  </div>
</div>
<div className="inside">
  
  { }
  <div className="icon"><i className="material-icons">{product.productDescription}</i></div>

</div>
</div>
      ))}

        

        


      </div>



    </div>

  );
}

export default Product;