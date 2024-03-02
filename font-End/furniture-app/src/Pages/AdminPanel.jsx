import React from "react";
import ProductAdd from '../Component/ProductAdd';

import ProductList from "../Component/ProductList";

function AdminPanel() {
    return ( 
        <div>
            <ProductAdd/>
            <ProductList/>
        </div>
        
     );
}

export default AdminPanel;