import React, { useEffect } from 'react'
import Login from './Login'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom';

export default function About() {
//   const navigate = useNavigate();
//   const callAboutPage = async()=>{
//     try{
//       const res = await fetch('/about',{
//         method:"GET",
//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json"
//         },
//         credentials:"include"

        
//       });
//       const data = await res.json();
//       console.log(data);

//       if(!res.status === 200){
//         const error = new Error(res.error);
//         throw error;
//       }


//     }catch(err){
//       console.log(err);
//       navigate("/contact");
//     }
//   }

//  const token = localStorage.getItem('token');
 
  // useEffect(()=>{
  //    if(token!== null){
  //      navigate('/about');
  //    }
  //    else{
  //     navigate('/contact');
  //    }
  // },[token,navigate])
  return (
    <div>
    <Nav></Nav>
      <Login></Login>
    </div>
  )
}
