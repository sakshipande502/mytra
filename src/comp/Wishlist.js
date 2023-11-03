import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import "./Wishlist.css";
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { div } from 'op';
import Empty from './Empty';
const i ="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19524874/2022/8/17/0fb689b3-28b4-4f6a-be08-a2ce9dfedcdc1660715206206QOMNBluePrintMandarinCollarTop1.jpg"
export default function Wishlist() {
 
  const {cardItems,subTotal,tax,shipping,total}= useSelector((state)=> state.card);
  const dispatch = useDispatch();
  const increment=(id)=>{
    dispatch({
      type:"addToCard",
      payload:{id},
     });
     dispatch({
      type: "calculatePrice",
    });
       
  }
  const decrement=(id)=>{
   dispatch({
    type:"decrement",
    payload:id,
   });
   dispatch({
    type: "calculatePrice",
  });
  }
  const deletehandler=(id)=>{
    dispatch({
      type:"deleteFromCard",
      payload:id,
     });
     dispatch({
      type: "calculatePrice",
    });

  }
  const inlineStyle = {
    color: 'black',
    fontSize: '16px',
    // backgroundColor: 'lightgray',
    padding: '10px',
    textDecoration: 'none',
    textAlign: 'center', // Center-align the text
    paddingTop: '100px',  // Add padding from the top
    fontSize: '30px',
  };
  return (
    <div>
      {/* <Nav></Nav> */}
      <div className='card2'>
        <main>
        {
          cardItems.length > 0 ?(
            cardItems.map((i)=>(
              <Carditem
          imgsrc={i.image}
          name={i.name}
          price={i.price}
          qty={i.quantity}
          id={i.id}
          key={i.id}
          decrement={decrement}
          increment={increment}
          deletehandler={deletehandler}

         
          ></Carditem>
            ))
          ): <Empty></Empty>
          

        }
        
          
          
        </main>
        <aside>
         <h1>Subtotal:₹{subTotal}</h1> 
         <h1>Shipping:₹{shipping}</h1> 
         <h1>Tax:₹{tax}</h1> 
         <h1>Total:₹{total}</h1> 
        </aside>
      </div>
    </div>
  )
}
 const Carditem= ({
  imgsrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deletehandler,
  id,

 })=>{
  return(
    <div className='cardItem2'>
    <img src={imgsrc} alt='Item'></img>
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={()=>{
        decrement(id)
      }}>-</button>
      <p>{qty}</p>
       <button onClick={()=>{
        increment(id)
      }}>+</button>
      <AiFillDelete onClick={()=>
        deletehandler(id)
      }></AiFillDelete>
    </div>
   </div>

  )
   
 }


