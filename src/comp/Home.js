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

        
           <img className='row-poster' src='https://pbs.twimg.com/media/Ece-q6eVAAAGqXU.jpg'></img>
           <img className='row-poster' src='https://couponswala.com/blog/wp-content/uploads/2022/07/myntra-right-to-fashion-sale.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/myntra%20birthday%20sale.jpg'></img>
           <img className='row-poster' src='https://pbs.twimg.com/media/FJJh7JzagAMUT4i.jpg'></img>
           <img className='row-poster' src='https://pbs.twimg.com/media/FBufTwSVgAM8qEX?format=jpg&name=900x900'></img>
           <img className='row-poster' src='https://hungamadeal.co.in/wp-content/uploads/2020/11/freesnippingtool.com_capture_20201109213809.png'></img>
           <img className='row-poster' src='https://pbs.twimg.com/ext_tw_video_thumb/1443147242127298565/pu/img/Hxlc1d6hyhz4VPEl.jpg'></img>
           <img className='row-poster' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2df8387350097.5db5c3936fd07.jpg'></img>
           <img className='row-poster' src='https://pbs.twimg.com/ext_tw_video_thumb/1452909163437199370/pu/img/1Dh23eiS1mJUvmkW.jpg'></img>
           </div>
        </div>
        <div className='row'>
        <div className='row-posters'>

        <img className='row-poster' src='https://hungamadeal.co.in/wp-content/uploads/2020/11/freesnippingtool.com_capture_20201109213809.png'></img>
           <img className='row-poster' src='https://pbs.twimg.com/ext_tw_video_thumb/1443147242127298565/pu/img/Hxlc1d6hyhz4VPEl.jpg'></img>
           <img className='row-poster' src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2df8387350097.5db5c3936fd07.jpg'></img>
           <img className='row-poster' src='https://pbs.twimg.com/ext_tw_video_thumb/1452909163437199370/pu/img/1Dh23eiS1mJUvmkW.jpg'></img>
        <img className='row-poster' src='https://pbs.twimg.com/media/Ece-q6eVAAAGqXU.jpg'></img>
           <img className='row-poster' src='https://couponswala.com/blog/wp-content/uploads/2022/07/myntra-right-to-fashion-sale.jpg'></img>
           <img className='row-poster' src='https://assets.indiadesire.com/images/myntra%20birthday%20sale.jpg'></img>
           <img className='row-poster' src='https://pbs.twimg.com/media/FJJh7JzagAMUT4i.jpg'></img>
           <img className='row-poster' src='https://pbs.twimg.com/media/FBufTwSVgAM8qEX?format=jpg&name=900x900'></img>
          
</div>
        </div>
        
        </div>
        {/* <Footer></Footer> */}
    </section>
   

    </>
  )
}
