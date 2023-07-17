import React, { useState } from 'react'
import "./Home.css"
import Nav from './Nav'
import Menucard from './menucard'
import Api from './menu'
export default function Skills() {
  const [data,setdata] = useState(Api);
    const fn =(category)=>{
         const ud = Api.filter((curr)=>{
             return curr.category=== category;
         });
         setdata(ud);
    }
 
  return (
    
    <>
    <Nav onClick={()=>fn("Men")} ></Nav>
    <Menucard menuData={data}></Menucard>
    </>
  )
}
