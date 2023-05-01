import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light bg-danger " >
  <div className="container-fluid">
    <a className="navbar-brand" href="...">
        <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png" alt="..." style={{width:"3rem"}}/>

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        
        <li class="nav-item">
          <NavLink className="nav-link" to="signup">Signup</NavLink>
        </li>
      
        
      </ul>
       
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
