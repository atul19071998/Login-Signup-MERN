import React  from 'react'
import Navbar from './Components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup';
import Error from './Components/Error';
 import Logout from './Components/Logout'
 import './App.css'

const App = () => {
//contextAPI
 
  
 
  return (
    <>
 
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    
     </>
  )
}

export default App

