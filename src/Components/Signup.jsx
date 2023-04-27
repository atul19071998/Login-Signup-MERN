import React from 'react'
import {NavLink , useNavigate} from 'react-router-dom';
 
import { useState } from 'react';
import '../Compoentcss/Signup.css'
export const Signup = () => {
   const navigate = useNavigate();
   const [user, setUser ] = useState({
      name:"",
      email:"",
      phone:"",
      work:"",
      password:"",
      cpassword:"",

   });

 let name,value;
   const handleInputs = (e) =>{
      console.log(e);
      name= e.target.name;
      value= e.target.value;
      console.log(name);
      console.log(value)
      setUser({...user,[name]:value});
   
   }

   const PostData = async(e) =>{
        e.preventDefault();
        const {name, email,phone,work ,password, cpassword} = user;

      const res = await  fetch("http://localhost:8000/register",{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify(
            {
               name, email,phone,work ,password, cpassword
             } )
      });
      const data = await  res.json();
       if(res.status === 422 || !data){
         window.alert("Invalid registeration");
         console.log("Invalid registeration")
       }else{
         window.alert("Registeration Succesfull")
         console.log("Invalid registeration");
         navigate('/login');
       }
   }
       
  return (
     <>
<div className="signup-wrapper">
        <div className="signup-wrap">
         <div className="signup-l">
         <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=2000" alt="..." />
         </div>

         <div className="signup-r">
         <div className="signup-form">
         <h2 className="form-title">Signup</h2>
   
   <form className='register-form'  id='register-form' method="POST">
      <div className="form-group">
         <label>Name:</label>
         <input type="text" name="name" id="name" autoComplete="off"
         value={user.name}
         onChange={handleInputs}
         placeholder="Your Name"/>
      </div>
      <div className="form-group">
         <label>Email:</label>
         <input type="email" name="email" id="email" autoComplete="off"
         value={user.email}
         onChange={handleInputs}
         placeholder="Your Email"/>
      </div>
      <div className="form-group">
         <label>Phone:</label>
         <input type="number" name="phone" id="phone" autoComplete="off"
         value={user.phone}
         onChange={handleInputs}
         placeholder="Your Mobile No."/>
      </div>
      <div className="form-group">
         <label>Work:</label>
         <input type="text" name="work" id="work" autoComplete="off"
         value={user.work}
         onChange={handleInputs}
         placeholder="Your Profession"/>
      </div>
      <div className="form-group">
         <label>Password:</label>
         <input type="password" name="password" id="password" autoComplete="off" 
          value={user.password}
          onChange={handleInputs}
         placeholder="Your password"/>
      </div>
      <div className="form-group">
         <label>CPassword:</label>
         <input type="password" name="cpassword" id="cpassword" autoComplete="off" 
          value={user.cpassword}
          onChange={handleInputs}
         placeholder=" Confirm Your password"/>
      </div>
      <div className="form-group form-button">
          <button button type="submit" name="signup" id="signup"   className="form-submit btn-success mt-3"    onClick={PostData}>Register</button> or 
          <NavLink to="/login" className="signup-image-link mx-3">Login here</NavLink>
      </div>
   </form>

       

              </div>
            
         </div>
        </div>
     </div>

     </>
  )
}
 
export default Signup;
