<<<<<<< HEAD

=======
import React from 'react';
>>>>>>> 85e592837d0ea7430b0e5cf89a40d149d56994c4
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
<<<<<<< HEAD
    <div className="App">
      
    </div>
=======
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
>>>>>>> 85e592837d0ea7430b0e5cf89a40d149d56994c4
  );
}

export default App;
