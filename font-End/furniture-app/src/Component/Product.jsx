<<<<<<< Updated upstream
import item from '../Assets/chair 3.png';
import item2 from '../Assets/chair-2.png';
import item3 from '../Assets/Chair.png';

=======
>>>>>>> Stashed changes
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ProductCard.css'; // Import your CSS file here
import testpoto from '../Assets/Chair.png';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        

        const response = await axios.get('http://localhost:8090/api/products/all', {
           
        });

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

<<<<<<< Updated upstream
    return ( 
<div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid d-flex justify-content-center">
        <a className="navbar-brand text-center" href="#">Living Room</a>
      </div>
    </nav>
<div className="container mt-5">
    {/* /// */}
=======
  return (
    <div>
      <div className="container mt-5">
        <div className="navbar navbar-expand-lg navbar-light bg-primary mb-4" style={{ backgroundColor: '#0000BF' }}>
          <div className="container-fluid d-flex justify-content-center">
            <a className="navbar-brand text-center" href="#">Living Room</a>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
      {products.map(product => (
       
          <div className="wrapper"  key={product.id}>
            <div className="container">
            <div className="top" style={{
  height: '60%',
  width: '100%',
  backgroundSize: 'cover'
}}><img src={testpoto} alt="Chair" />
</div>
>>>>>>> Stashed changes

              <div className="bottom">
                <div className="left">
                  <div className="details">
                    <h1>{product.name}</h1>
                    <p>Rs.{product.price}</p>
                  </div>
                  <button type="button" className="btn btn-outline-primary">Add to cart</button>
                </div>
              </div>
            </div>
            <div className="inside">
              <div className="icon"><i className="material-icons">{product.productDescription}</i></div>
            </div>
          </div>
        
      ))}
<<<<<<< Updated upstream

  

  </div>
</div>


</div>

     );
=======
      </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default Product;
