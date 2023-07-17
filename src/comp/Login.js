import React from "react";
import Image from "./menu";
import { useState } from "react";
import Menucard from "./menucard";
import Nav from "./Nav2";
import "./style.css"

const unique =[
  ...new Set(
    Image.map((curr)=>{
        return curr.category;
    })
  ),
  "All",
];


export default function Login(){
   const[menuData,setMenuData] =useState(Image);
   const[menuList,setMenuList]= useState(unique);
   const filterItem =(category)=>{
     if(category==="All"){
      setMenuData(Image)
      return;
     }
     const updateList =Image.filter((curr)=>{
           return curr.category=== category;
     });
     setMenuData(updateList);
   };
    return(
        <>
        <Nav filterItem={filterItem} menuList={menuList}></Nav>
        <Menucard menuData={menuData}></Menucard>
        </>
    )
}