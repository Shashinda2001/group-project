// import React, { useState } from 'react';
// import Cover from '../assets/logincover.jpg';
// import login2 from '../assets/login1.jpg';
// import '../assets/register.css';
// import React,{useState} from 'react';
 
import React, { useState } from 'react';
import axios from 'axios'; // Ensure you have imported axios
import login2 from '../Assets/login1.jpg';
import '../css/register.css';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import SignForm from './SignForm';
import HomePage from './HomePage';

 
 

export default function LoginForm() {

   let navigate=useNavigate();

      const [user,setUser]=useState({
        password:"",
        email:""
      })

      const{email,password}=user;
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("link rhreh srhbrhbr");
        navigate("/LoginForm");
    }
    

    return ( 

        <div className='main_container'>
            <div className="left_div">
                <img src={login2} alt="logo img" />
                <div className='img_div_box'>
                    <h2>Turn Your Ideas In to Real...</h2>
                    <p>start for free and get attractive with the community </p>
                     
                </div>
            </div>

            <div className="right_div">
                <h2>Login</h2>
                <p className='text'>Welcome Back Please Enter Your Details below...</p>
                
                <form onSubmit={(e)=>onSubmit(e)}>
                    <input onChange={(e)=>onInputChange(e)} type='email' placeholder='Email' name='email'value={email}/>
                    <input onChange={(e)=>onInputChange(e)} type='text' placeholder='Password' name='password' value={password}/>

                    <a href='#' style={{margin: "10px 0 10px 19vw",}}>Forgotten Password</a>

                    <button style={{background:"rgba(15, 17, 17, 0.7)",color:"white"}} type='submit'>Login</button>
                    
                    <button style={{color:"red",border:"none"}}  onClick={()=>{navigate('/')}}>Home Page</button>
                     
                    
                    <hr style={{ margin: "3vh 0"}}/>
                    
                    
                    
                                     
                </form>

                <div className='center_box'>
                Don't Have an Account ? <a style={{ color: 'blue',cursor:'pointer', textDecoration: 'underline', ':hover': { color: 'red' } }} onClick={() => { navigate('/SignForm')}}>Register</a>

                
                </div>
                
            </div>
        </div>
     );
}

