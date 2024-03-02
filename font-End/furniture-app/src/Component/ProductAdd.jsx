import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
  });

  const { name, description, price, quantity, category, image } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const config = {
        headers: {
          'Authorization': `Bearer ${token}` // Include token in the request headers
        }
      };
      await axios.post("http://localhost:8090/product/add", product, config); // Pass config as the third argument
      navigate("/");
    } catch (error) {
      console.error("Error submitting product:", error);
      // Handle error gracefully, e.g., show error message to the user
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-4 border roundedm p-4 mt-2 shadow ">
          <h2 className="text-center m-4 ">Add Product</h2>
          <form onSubmit={onSubmit}>
            {/* Input fields */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="button" className="btn btn-outline-danger mx-2" onClick={() => navigate("/")}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductAdd;
