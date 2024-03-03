 
import ProductAdd from '../Component/ProductAdd';

import ProductList from "../Component/ProductList";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


function AdminPanel() {
    const [check, setCkeck] = useState([]);
    let navigate = useNavigate();

useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    // Decode the token to extract email
    if (token) {
      const decoded = jwtDecode(token);
      setCkeck(decoded.role)
      if(check!=="ADMIN") 
      navigate("/");
    }
    else{
        navigate("/");
    } 
    
    
  }, []);
    return ( 
        <div>
            <ProductAdd/>
            <ProductList/>
        </div>
        
     );
}

export default AdminPanel;