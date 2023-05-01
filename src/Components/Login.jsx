import React from 'react'
 
import '../Compoentcss/Login.css';
import {useState} from 'react';
import {NavLink , useNavigate} from 'react-router-dom';
const Login = () => {
   const navigate = useNavigate();
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   
   const LoginUser = async(e) =>{
      e.preventDefault();

      const res = await fetch('http://localhost:8000/signin',{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
       

         body:JSON.stringify({
            email,
            password
         }),
         credentials:"include"
      });

      const data = res.json();
      if(res.status === 400 || !data){
         window.alert("Invalid Credentials")
      }else{
         window.alert("Login Succesfull");
         navigate('/')
      }
   }

  return (
    <>
     <div className="signin-wrapper">
        <div className="sign-wrap">
         <div className="sign-l">
         <img src=" https://img.freepik.com/premium-vector/data-security-concept-illustration_251005-467.jpg?w=2000 " alt="..." />
         </div>

         <div className="sign-r mt-4">
         <div className="signup-form">
         <h2 className="form-title">Login</h2>
   
         <form className='register-form' method="POST" id='register-form'>
            
            <div className="form-group">
               <label>Email:</label>
               <input type="text" name="email" id="email" autoComplete="off" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Your Email"/>
            </div>
          
            <div className="form-group">
               <label>Password:</label>
               <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               placeholder="Your password"/>
            </div>
             
            
            <div className="form-group form-button">
                <button type="submit" name="signin"id="signin" className="form-submit btn-danger mt-3" value="Login" onClick={LoginUser} >Login</button> or 
                    <NavLink to="/signup" className="signin-image-link mx-3">Create an Account</NavLink>
            </div>

            

         </form>


       

              </div>
            
         </div>
        </div>
     </div>




 
    </>
  )
}

export default Login
