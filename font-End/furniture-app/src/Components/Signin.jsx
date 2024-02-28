import login1 from '../Images/login1.jpg';
import login2 from '../Images/login2.jpg';

function Signin() {

    return (
        <div className='main_container'>
            <div className="left_div">
                <img src={login2} alt="logo img" />
                <div className='img_div_box'>
                    <h2>Turn Your Ideas In to Real...</h2>
                    <p>start for free and get attractive with the community </p>
                    <button>Shop</button>
                </div>
            </div>

            <div className="right_div">
                <h2>Login</h2>
                <p className='text'>Welcome Back Please Enter Your Details below...</p>
                
                <form>
                    <input type='email' placeholder='Email'/>
                    <input type='text' placeholder='Password'/>

                    <a href='#' style={{margin: "10px 0 10px 19vw",}}>Forgotten Password</a>

                    <button style={{background:"rgba(15, 17, 17, 0.7)",color:"white"}}>Login</button>
                    <button >Register</button>
                    
                    <hr style={{ margin: "3vh 0"}}/>
                    
                    <div className='center_box'>or</div>
                    
                    <button>
                        <div className="g_btn"style={{}}>
                            <p>Login with  </p>
                            <img style={{height:"18px" ,marginLeft: "3px"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"/>
                        </div>
                    </button>                
                </form>

                <div className='center_box'>
                    <a href='#'>Don't Have Account ? Register</a>
                </div>
                
            </div>
        </div>
    );
}

export default Signin;
