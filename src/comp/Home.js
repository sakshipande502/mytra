import React from 'react'
import "./Home.css";
import Nav from './Nav';
import Footer from './Footer';
import About from './About'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
    <Nav></Nav>
   
     <section className='home'>
     
     <div className='sub-div'> 
        <h1 className='heading-1' >OMG ! Deals <span className='span-1' >Shop now</span> </h1>
      
        <div className='row'>
         <div className='row-posters'>

        
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           </div>
        </div>
        <div className='row'>
         <div className='row-posters'>

        
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/fashion%20haul%20myntra.jpg'></img>
           </div>
        </div>
        
        </div>
        {/* <Footer></Footer> */}
    </section>
   

    </>
  )
}
