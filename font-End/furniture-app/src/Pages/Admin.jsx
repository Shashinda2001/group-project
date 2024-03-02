import React from 'react';
import '../css/admin.css';

const AdminPage = () => {
  const adminName = "John Doe";
  const adminEmail = "john@example.com";

  
  const products=[
    { id: 1, name: 'Sofa Bed development   ',  image: ' https://m.media-amazon.com/images/I/81d90JW-LfL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price:40, quantity: 1 },
    { id: 2, name: 'Kot chair  production',  image: 'https://m.media-amazon.com/images/I/91FH47-BbwL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price: 50  },
    { id: 3, name: 'Modern Fabric Accent Chair',  image: 'https://m.media-amazon.com/images/I/61d2rgoL4CL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price: 7  },
    { id: 4, name: ' A Frame Computer Desk',  image: 'https://m.media-amazon.com/images/I/71mJ-owgDlL.__AC_SX300_SY300_QL70_FMwebp_.jpg', price: 76  },
    { id: 5, name: 'Bathroom capboard',  image: 'https://m.media-amazon.com/images/I/71vAmA4XAXL._AC_SX679_.jpg', price: 20, quantity: 1 },
  ];
  const handleEdit = (id) => {
    // Logic for editing product
    console.log(`Editing product with ID: ${id}`);
  };

  const handleRemove = (id) => {
    // Logic for removing product
    console.log(`Removing product with ID: ${id}`);
  };

  return (
    <div className="admin-page">
      <header>
        <h1>Welcome Dear Admin <br /><span className='name_admin'>{adminName}</span></h1>
        <h2>All Products</h2>
         
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Price: ${product.price}</p>
            </div>
            <div className="product-buttons">
              <button className='add_btn' onClick={() => handleEdit(product.id)}>Edit</button>
              <button className='remove_btn' onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
