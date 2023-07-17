import React from 'react';
import './sliding.css';

export default function Sliding() {
  return (
    <div>
      <div className='slider-frame'>
        <div className='slide-images'>
           <div className='img-container'>
            <img
              className='slider-image'
              src='https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/4e82/1564/0d39/6b36/2c9e/92c8/9f9b/be77/77de/a592/a592.jpeg'
              alt='Image 1'
            />
          </div> 
          <div className='img-container'>
            <img
              className='slider-image'
              src='https://www.zingoy.com/blog/wp-content/uploads/2021/06/Myntra-End-of-Reason-Sale-Offers-2021-blog.jpg'
              alt='Image 2'
            />
          </div>
          <div className='img-container'>
            <img
              className='slider-image'
              src='https://pbs.twimg.com/media/Ece-q6eVAAAGqXU.jpg'
              alt='Image 3'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
