import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ProductCard.css';
import { jwtDecode } from "jwt-decode";

function Product() {
  const [products, setProducts] = useState([]);
  
  function cutName(image) {
    if (!image) return ""; // Check if image is null or undefined
    let filePath = image;
    const fileName = filePath.match(/[^\\]*$/)[0];
    const extractedFileName = fileName.split("\\").pop();
    return extractedFileName;
  }
  
  const [carTproduct, setcarTproduct] = useState({
    userId: "",
    productId: "",
    quantity: "",
  });

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

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const decoded = jwtDecode(token);
      console.log(decoded.userId);
      console.log(productId); // Log productId to console
      // You can add your logic for adding the product to the cart here
      const updatedCarTproduct = { userId: decoded.userId, productId: productId, quantity: 1 };
      console.log(updatedCarTproduct); // Log the updated state
      setcarTproduct(updatedCarTproduct); // Update the state
      console.log(carTproduct); // Log the state after update (may not be immediately reflected)
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` // Include token in the request headers
        }
      };
      await axios.post("http://localhost:8090/api/Cart/add", updatedCarTproduct, config);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', width: '90%', flexWrap: 'wrap' }}>
        {products.map((product, index) => (
          <div className="wrapper" key={index}>
            <div className="container">
              <div className="top" style={{
                height: '60%',
                width: '100%',
                backgroundSize: 'cover'
              }}>
                <img src={"/images/" + cutName(product.imageName)} alt="Product" />
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h5>{product.name}</h5>
                    <p>Rs.{product.price}</p>
                  </div>
                  <button type="button" className="btn btn-outline-primary" onClick={() => addToCart(product.productId)}>add to cart</button>
                </div>
              </div>
            </div>
            <div className="inside">
              <div className="icon"><i className="material-icons">{product.productDescription}</i></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
