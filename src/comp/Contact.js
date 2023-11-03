import React, { useState } from 'react'
import Nav from './Nav';
import "./contact.css";
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Contact() {
 const [email,setEmail] = useState('');
 const navigate = useNavigate();
 const [password,setPassword]= useState('');

 const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method :"POST",
      headers :{
         "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("failed to login!");
    }
    else{
      // const data = await res.json();
      localStorage.setItem('token',data.token);
      window.alert("login successful!");
      navigate("/");
    }
 }
 
  return (
    <div>
     <Nav></Nav>
      <div className='first'>
      <div className='parent_second'>
      <div className='second'>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div className='inner'>
        <h1 style={{color:'#414345' ,paddingTop:"10px"}}>Flat ₹300 OFF </h1>
        <h3 style={{color:'#414345'}}>On First Order</h3>
        

        </div>
        
        <img className='image1'  src='https://images.vexels.com/content/2124/preview/shopping-girl-illustration-37662b.png'></img>
        </div>
        
         <h2 className='head'>Login</h2>
         <form method='POST'>
         <input className='head2'  type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email' autoComplete='off'></input>
         <input className='head2'  type='password' value={password}  onChange={(e)=>setPassword(e.target.value)}placeholder='Enter password'></input>
         <br></br>
         <button className='bt' name="signin"  id="signin"
         value="Log In"
         onClick={loginUser}
         >Login</button>
         </form>
         <div>
         <h4 className='head4'>Don't have account?</h4>
         <Link to ='/sample' className='bt4'>Sign up</Link>
        
         </div>
       
      </div>
      </div>
      </div>
    </div>
  )
}
