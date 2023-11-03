
import React, { useState } from 'react'
import Nav from './Nav';
import "./contact.css";
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
export default function Sample() {
  // const history = useHistory();
  const navigate = useNavigate();
  
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  let name,value;
  const handleInputs =(e)=>{
    console.log(e);
    name = e.target.name;
    value= e.target.value;
    // console.log(name);
    setUser({...user,[name]:value});
  }
  const PostData =async(e)=>{
      e.preventDefault();
      const {name,email,phone,work,password,cpassword} =user;
      const res = await fetch("/registration",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phone,work,password,cpassword
        })
      })
      const data = await res.json();
      if(res.status === 422 || !data){
        window.alert("Failed To Register")
        console.log("fail");
      }else{
        window.alert("Registration Successfully")
        console.log("success");
        // history.push("/contact")
        navigate("/contact");

      }

  }

  return (
    
       <div>
     <Nav></Nav>
      <div className='first'>
      <div className='parent_second'>
      <div style={{width:"500px",height:"620px"}}className='second'>
        {/* <div style={{display:'flex',justifyContent:'center'}}> */}
        {/* <div className='inner'>
        <h1 style={{color:'#414345' ,paddingTop:"10px"}}>Flat ₹300 OFF </h1>
        <h3 style={{color:'#414345'}}>On First Order</h3>
        

        </div>
        
        <img className='image1'  src='https://images.vexels.com/content/2124/preview/shopping-girl-illustration-37662b.png'></img>
        </div> */}
        
         <h2 className='head'>Register</h2>
         <form method='POST'>
         <input className='head2' name='name'  type='text' placeholder='Enter Name' value={user.name} onChange={handleInputs}></input>
         <input className='head2' name='phone'  type='number' placeholder='Enter Phone no'value={user.phone} onChange={handleInputs}></input>
         <input className='head2' name='work' type='text' placeholder='Enter address'value={user.work} onChange={handleInputs}></input>

         <input className='head2' name='email' type='email' placeholder='Enter Email'value={user.email} onChange={handleInputs}></input>
         <input className='head2' name='password' type='password' placeholder='Enter password'value={user.password} onChange={handleInputs}></input>
         <input className='head2' name='cpassword' type='password' placeholder='Enter confirm password'value={user.cpassword} onChange={handleInputs}></input>

         <br></br>
         <button className='bt' onClick={PostData} >Register</button>
         </form>
         <div>
         <h4 className='head4'>Have an existing account?</h4>
         <Link to ="/contact" className='bt4'>Login</Link>
        
         </div>
       
      </div>
      </div>
      </div>
    </div>
  
  
  )
}
