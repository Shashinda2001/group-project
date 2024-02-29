import item from '../Assets/chair 3.png';
import item2 from '../Assets/chair-2.png';
import item3 from '../Assets/Chair.png';

function Product() {
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

  <div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
  <div className="card flex">
    <img src={item2} className="card-img-top" alt="Item Image" style={{  maxWidth: '100%' }} />
    <div className="card-body" style={{ padding: '15px' }}>
      <h5 className="card-title">Item Name</h5>
      <p className="card-text">Description of the item goes here. You can include details about the item's features, materials, etc.</p>
      <p className="card-text">$XX.XX</p>
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-primary mr-2">Add to Cart</a>
        <a href="#" className="btn btn-danger">Buy Now</a>
      </div>
    </div>
  </div>
</div>

     
<div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
  <div className="card flex">
    <img src={item3} className="card-img-top" alt="Item Image" style={{  maxWidth: '100%' }} />
    <div className="card-body" style={{ padding: '15px' }}>
      <h5 className="card-title">Item Name</h5>
      <p className="card-text">Description of the item goes here. You can include details about the item's features, materials, etc.</p>
      <p className="card-text">$XX.XX</p>
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-primary mr-2">Add to Cart</a>
        <a href="#" className="btn btn-danger">Buy Now</a>
      </div>
    </div>
  </div>
</div>

     
<div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
  <div className="card flex">
    <img src={item2} className="card-img-top" alt="Item Image" style={{ maxWidth: '100%' }} />
    <div className="card-body" style={{ padding: '15px' }}>
      <h5 className="card-title">Item Name</h5>
      <p className="card-text">Description of the item goes here. You can include details about the item's features, materials, etc.</p>
      <p className="card-text">$XX.XX</p>
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-primary mr-2">Add to Cart</a>
        <a href="#" className="btn btn-danger">Buy Now</a>
      </div>
    </div>
  </div>
</div>


<div className="col-md-3" style={{ marginTop: '20px', marginBottom: '20px' }}>
  <div className="card flex">
    <img src={item} className="card-img-top" alt="Item Image" style={{ maxHeight: '200px', maxWidth: '100%' }} />
    <div className="card-body" style={{ padding: '15px' }}>
      <h5 className="card-title">Item Name</h5>
      <p className="card-text">Description of the item goes here. You can include details about the item's features, materials, etc.</p>
      <p className="card-text">$XX.XX</p>
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-primary mr-2">Add to Cart</a>
        <a href="#" className="btn btn-danger">Buy Now</a>
      </div>
    </div>
  </div>
</div>



  </div>
</div>


</div>

     );
}

export default Product;