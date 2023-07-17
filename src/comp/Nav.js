
import "./Nav.css";
import { Link } from 'react-router-dom';
// import "./style.css";

function Nav() {
  
  return (
    
    <>
    <div className='header'>
       
       <div className='search'>
       <input className='input-1' type="search"
                placeholder="Search items..."/>
         <button className="searchButton" type="button" >
                    Search
                </button>       
        </div>
       <nav className='navbar2'>
       
        <Link to ='/' className='an'>Home</Link>
        <Link to ='/about' className='an2'>Shop Now</Link>
       
        <Link to ='/Wishlist' className='an'>Wishlist</Link>
        <Link to ='/Contact' className='an'>Account</Link>
        </nav>
        {/* <button onClick={()=> filterItem("Women")} className='an'>Women</button> */}
        <img className="logo1" src="https://mumbaimirror.indiatimes.com/photo/80601325.cms" alt="img" ></img>
    </div>
    </>
  )
}

export default Nav;
