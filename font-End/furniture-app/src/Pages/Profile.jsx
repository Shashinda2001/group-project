 
import '../css/Profile.css';
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Profile() {

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

    useEffect(() => {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("token");
  
      // Decode the token to extract email
      if (token) {
        const decoded = jwtDecode(token);
        setEmail(decoded.sub);
        setUser(decoded.role);
      }else {
        navigate("/");
      }
    }, []);
      
    
    const UsernameFromEmail = ({ email }) => {
      
      const username = email.split('@')[0];
      return username;
    }

    
    

  return (
    
     
    <div>
      <section className="profileData">
        <h1 className=".primary-subheading">Profile <span>Details</span></h1>

        <div className="firstdev">
          <div className="col1">
          <h2 className="output-box">{user}</h2>
            <h2 className="output-box">{UsernameFromEmail({email})}</h2>
             
            <h2 className="output-box">{email}</h2>
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
