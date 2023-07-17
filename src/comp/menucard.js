import React from "react";
const Menucard =({menuData})=>{
    
  return(
    <>
    <section className="main-card--cointainer">
    {
        menuData.map((curr)=>{
            const {id,name,category,image, descripation} = curr;
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
                    {/* <div className="card-read">Read</div> */}
                    </div>
                    <img src={image} alt="img" className="card-media"/>
                    <span className="card-tag subtle">Wishlist Now</span>
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

export default Menucard;
