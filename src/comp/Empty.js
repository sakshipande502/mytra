import React from 'react'
import { Link } from 'react-router-dom';
export default function Empty() {
  return (
    <div>
    <div style={{height:"120px", display:'flex', justifyContent:'center', alignItems:'center', width:'50%'}}>
          <h3 style={{paddingLeft:'120px',paddingTop:'40px',color:'#5c5E60'}}>Hey,it feel so light!There is nothing in your bag...Let's add some items.</h3>
    {/* <h4>There is nothing in your bag...Let's add some items.</h4>  */}
    </div>
    <div style={{height:"200px", display:'flex', justifyContent:'center', alignItems:'center', width:'50%'}}> 
   
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wXqh4rznI6EmUhfKX4XMP05nobeu1z6aMQ&usqp=CAU'></img>
    <Link to="/about" style={{fontSize:'30px', color:'darkpink',textDecoration:'none', animation:' blinker .75s linear infinite'}}> Shop Now</Link></div> 

    </div>
  )
}
