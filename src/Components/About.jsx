import React from 'react'
import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
const About = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = useState({});
  console.log(userData)

 
const callAboutPage = async () =>{
  try{
    const res = fetch('/about',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    });

    const data = await res.json();
    
    console.log(data);
    setUserData(data)

    if(!res.status === 200){
      const error = new Error(res.error);
      throw error;
    }

  }catch (err){
      console.log(err);
      navigate('/login');
  }
}

  useEffect(() =>{
    callAboutPage();
  },[])
  return (
    <>
      <h1>hello from about</h1>
      <form method="GET">
   {/* <h5>{userData.name}</h5>
   <h5>{userData.email}</h5>
   <h5>{userData.phone}</h5>
   <h5>{userData.work}</h5>
   <h5>{userData.id}</h5> */}
      </form>
    </>
  )
}

export default About
