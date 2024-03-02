import React from 'react';
import './css/Profile.css';

function Profile() {
  return (
    <div>
      <section className="profileData">
        <h1 className=".primary-subheading">Profile <span>Details</span></h1>

        <div className="firstdev">
          <div className="col1">
            <h2 className="output-box"> Name </h2>
            <p className="output-box"> Mobile</p>
            <p className="output-box"> Email</p>
          </div>
          <div className="col2">
            <h2>Update Your Profile Details:</h2>
            <form>
              <div className="col2-2">
                <div className="col2">
                  <input type="text" name="firstname" placeholder="First Name" />
                  <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                <div className="col2">
                  
                <input type="text" name="mobile" placeholder="Mobile Number" />
                  <button className='update-btn'>Update</button>
                </div>
              </div>    
            </form>    
          </div>
        </div>                 
        
        <h1 className="primary-subheading">Order <span>Details</span></h1>
        <div className="orderdiv">
          <table>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Date</th>
              <th>Order Status</th>
            </tr>
            <tr>
              <td> Product</td>
              <td> 236753</td>
              <td>32 </td>
              <td>123442 </td>
              <td>12.8.2015 </td>
              <td>Shipped </td>
            </tr>
          </table>
          
        </div>    
      </section>
    </div>
  );
}

export default Profile;
