import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';
export default function Errorpage() {
  return (
    <>
   
  <div className='first'>
      <div className='parent_second'>
        <div  className='notfound-404'>
            <h1 style={{fontSize:"200px",color:"#D3D3D3",paddingLeft:"220PX"}}>404</h1>
            <div>
                <h2 style={{color:"black",alignItems:"center",paddingLeft:"300PX"}}>Page not found!</h2>
                <h3 style={{color:"black"}}>The page you are looking for might have been removed had its name changed or is temporarly unavailable.</h3>
                <Link style={{alignItems:"center",height:"40px",width:"190px"}} to ='/' className='bt4'>Back To Home Page</Link>

            </div>
        </div>
        
    </div>
      
    </div>
    </>
  )
}
