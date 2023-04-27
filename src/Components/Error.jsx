import React from 'react'
import {NavLink } from 'react-router-dom'
const Error = () => {
  return (
     <>
     <div className="not-found">
        <div className="not-foundwrap">

            <div className="notfound-404">
                <h1>404</h1>
            </div>
       <h2>We are sorry ,page Not found!</h2>
       <p className='mb-5'>

        The page which  u are searchinga re not temperoray unavailabl at this moment.
       </p>
       <NavLink to="/">Back To Home Page</NavLink>
        </div> 
        </div></>
  )
}

export default Error
