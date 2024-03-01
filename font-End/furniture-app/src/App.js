import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import SignForm from './Pages/SignForm';
import LoginForm from './Pages/LoginForm';
import About from './Component/About';
import Contact from './Component/Contact';
import Testimonial from './Component/Testimonial';
import ForgotPassword from './Pages/ForgotPassword';
 

function App() {
  return (
    <Router>
      <div>
        <Routes>
         <Route path="/About" element={<About/>} />
         <Route path="/Contact" element={<Contact/>} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/SignForm" element={<SignForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
