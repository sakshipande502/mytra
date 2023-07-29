import React from "react";
import { toast } from "react-hot-toast";
import "./menu";
import { useDispatch } from "react-redux";
const Menucard =({menuData})=>{
    const dispatch = useDispatch()
    const addcard =(options)=>{
       toast.success("added to card");
       dispatch({type:"addToCard",payload:options});
       dispatch({
        type: "calculatePrice",
      });
       
    }
   
    
  return(
    <>
    <section className="main-card--cointainer">
    {
        menuData.map((curr)=>{
            const {id,name,category,image, descripation,quantity,price} = curr;
            return(
                <>
                <div className="card-container">
            <div className="card">
                <div className="card-body">
                    {/* <span className="card-number card-circle subtle">{curr.id}</span> */}
                    <span className="card-author subtle" >{name}</span>
                    <h2 className="card-description subtle">{category}</h2>
                    <span className="card-description subtle">
                       {descripation}
                    </span>
                    <br/>
                    <span className="card-description subtle">
                     Rs.{price}
                    </span>
                    {/* <div className="card-read">{price}</div> */}
                    </div>
                    <img src={image} alt="img" className="card-media"/>
                    <button onClick={()=>addcard(curr)} className="card-tag subtle">Add to card</button>
                </div>
            </div>
            </>
            );
           
        })
    }
    </section>   
    </>
  );
};

// const ProductCard =({name,id,handler,img})

export default Menucard;
