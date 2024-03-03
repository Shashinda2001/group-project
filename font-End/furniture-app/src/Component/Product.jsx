import item from '../Assets/chair 3.png';
import item2 from '../Assets/chair-2.png';
import item3 from '../Assets/Chair.png';
import '../css/ProductCard.css';

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


<div   className="container mt-5">
    {/* /// */}
    <div className="navbar navbar-expand-lg navbar-light bg-primary mb-4" style={{backgroundColor: '#0000BF'}}>
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand text-center" href="#">Living Room</a>
  </div>
</div>

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
      {/* ///// */}
      
{/* ///// */}
  </div>
</div>
{/* /////////// */}
<div style={{display:'flex',}}>
<div className="wrapper">
      <div className="container">
        <div className="top" style={{ height: '60%',
    width: '100%',
    background: 'url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg) no-repeat center center',
    backgroundSize: 'cover'}}></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>Chair</h1>
              <p>£250</p>
            </div>
            <button type="button" class="btn btn-outline-primary">add to cart</button>      
             </div>
         
        </div>
      </div>
      <div className="inside">
        <div className="icon"><i className="material-icons">info_outline</i></div>
         
      </div>
    </div>

{/* //////////////////// */}
{/* /////////// */}
<div className="wrapper">
      <div className="container">
        <div className="top" style={{ height: '60%',
    width: '100%',
    background: 'url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg) no-repeat center center',
    backgroundSize: 'cover'}}></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>Chair</h1>
              <p>£250</p>
            </div>
            <button cl style={{backgroundColor: '#ADD8E6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Click me</button>
          </div>
         
        </div>
      </div>
      <div className="inside">
        <div className="icon"><i className="material-icons">info_outline</i></div>
         
      </div>
    </div>

{/* //////////////////// */}
{/* /////////// */}

<div className="wrapper">
      <div className="container">
        <div className="top" style={{ height: '60%',
    width: '100%',
    background: 'url(https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg) no-repeat center center',
    backgroundSize: 'cover'}}></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>Chair</h1>
              <p>£250</p>
            </div>
            <button cl style={{backgroundColor: '#ADD8E6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Click me</button>
          </div>
         
        </div>
      </div>
      <div className="inside">
        <div className="icon"><i className="material-icons">info_outline</i></div>
         
      </div>
    </div>
    </div>

{/* //////////////////// */}

</div>

     );
}

export default Product;