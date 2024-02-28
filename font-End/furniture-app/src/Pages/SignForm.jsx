
import login2 from '../Assets/login1.jpg';
import signcover from '../Assets/signcover.jpeg';
import React, { useState } from 'react';
import axios from 'axios'; // Ensure you have imported axios
import { useNavigate } from 'react-router-dom'; 
import '../css/register.css';
import HomePage from './HomePage';

export default  function SignForm(){
    let navigate=useNavigate();

    const [user,setUser]=useState({
      password:"",
      email:""
    })

    const{email,password,userName,cpassword}=user;
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
              <img src={signcover} alt="logo img" />
              <div className='img_div_box'>
                  <h2>Turn Your Ideas In to Real...</h2>
                  <p>start for free and get attractive with the community </p>
                   
              </div>
          </div>

          <div className="right_div">
              <h2>Register</h2>
              <p className='text'>Please Enter Your Details below...</p>
              
              <form onSubmit={(e)=>onSubmit(e)}>
                  <input onChange={(e)=>onInputChange(e)} type='text' placeholder='userName' name='userName' value={userName}/>
                  <input onChange={(e)=>onInputChange(e)} type='email' placeholder='Email' name='email'value={email}/>
                  <input onChange={(e)=>onInputChange(e)} type='text' placeholder='Password' name='password' value={password}/>
                  <input onChange={(e)=>onInputChange(e)} type='text' placeholder='Confirm Password' name='cpassword' value={cpassword}/>

                   

                  <button style={{background:"rgba(15, 17, 17, 0.7)",color:"white"}} type='submit'>signIn</button>
                  
                  <button style={{color:"red",border:"none"}}  onClick={()=>{navigate('/')}}>Home Page</button>
                   
                  
                  <hr style={{ margin: "3vh 0"}}/>
                  
                   
                  
                                   
              </form>

              <div className='center_box'>
              {/* Don't Have an Account ? <a style={{ color: 'blue',cursor:'pointer', textDecoration: 'underline', ':hover': { color: 'red' } }} onClick={() => { navigate('/SignForm')}}>Register</a> */}

              back to <a style={{ color: 'blue',cursor:'pointer', textDecoration: 'underline', ':hover': { color: 'red' } }}  onClick={()=>{navigate('/LoginForm')}}> login</a>
              </div>
              
          </div>
      </div>
   );
}

