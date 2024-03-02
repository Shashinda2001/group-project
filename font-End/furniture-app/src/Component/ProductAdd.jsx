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
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Product Description
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Description"
                name="description"
                value={description}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Price"
                name="price"
                value={price}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Quantity"
                name="quantity"
                value={quantity}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Category"
                name="category"
                value={category}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Upload Image"
                name="image"
                value={image}
                onChange={onInputChange}
              />
            </div>
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
