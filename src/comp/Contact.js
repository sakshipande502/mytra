import React from 'react'
import Nav from './Nav';
import "./contact.css";
export default function Contact() {
  return (
    <div>
     <Nav></Nav>
      <div className='first'>
      <div className='second'>
         <h1 className='head'>Login</h1>
         <input className='head2' type='text' placeholder='Enter name'></input>
         <input className='head2' type='password' placeholder='Enter password'></input>
         <br></br>
         <button className='bt'>Submit</button>
         <div>
         <h4 className='head4'>Don't have account?</h4><button className='bt4'>Sign in</button>
         </div>
      </div>
      </div>
    </div>
  )
}
