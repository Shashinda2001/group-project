import item from '../Assets/chair 3.png';
import item2 from '../Assets/chair-2.png';
import item3 from '../Assets/Chair.png';

import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function Product() {
  const imagePath ="";
  const [products,setProducts]=useState([]);

//     useEffect(()=>{
//         loadProducts();
//     },[]);

//  const loadProducts=async ()=>{
//     const result= await axios.get("http://localhost:8090/products");
//     setProducts(result.data);
//  }



    return ( 
<div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container-fluid d-flex justify-content-center">
        <a className="navbar-brand text-center" href="#">Living Room</a>
      </div>
    </nav>
<div className="container mt-5">
    {/* /// */}

{/* //// */}
  <div className="row">

   

{products.map((product)=>(
   <div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
   <div className="card flex">
   
     <img imgAddress={"./images/"+product.productImage} className="card-img-top" alt="Item Image" style={{  maxWidth: '100%' }} />
     


     <div className="card-body" style={{ padding: '15px' }}>
       <h5 className="card-title">{product.productName}</h5>
       <p className="card-text">{product.productDescription}.</p>
       <p className="card-text">${product.productPrice}.00</p>
       <div className="d-flex justify-content-between">
         <a href="#" className="btn btn-primary mr-2">Add to Cart</a>
         <a href="#" className="btn btn-danger">Buy Now</a>
       </div>
     </div>
   </div>
 </div>
 
      ))}

  

  </div>
</div>


</div>

     );
}

export default Product;