import React from 'react';
import NavBar from '../Component/NavBar';
import Home from '../Component/Home';
import About from '../Component/About';
import Work from '../Component/Work';
import Testimonial from '../Component/Testimonial';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import Catalog from '../Component/Catalog';
import Product from '../Component/Product';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const HomePage = () => {

    return (
    <div>
        
        <NavBar/>
        <Home/>
        <Catalog/>
        <Product/>
        <About/>
        <Work/>
        <Testimonial/>
        <Contact/>
        <hr/>
        <Footer/>
    </div>
    );
};

export default HomePage;