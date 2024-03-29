
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SignForm from './Pages/SignForm';
import  ShoppingCart from './Pages/ShoppingCart';
import LoginForm from './Pages/LoginForm';
import About from './Component/About';
import Contact from './Component/Contact';
import Testimonial from './Component/Testimonial';
import ForgotPassword from './Pages/ForgotPassword';
import AdminPanel from './Pages/AdminPanel';
import Profile from './Pages/Profile';
import CartItem from './Pages/CartItem';
 
 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/AdminPanel" element={<AdminPanel/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignForm" element={<SignForm />} />
          <Route path="/CartItem" element={<CartItem />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
