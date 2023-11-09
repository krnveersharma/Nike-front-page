import React from 'react'
import brands from "../images/shops.png"
import heroimg from "../images/shoe_image.png"
export default function Hero() {
  return (
    <div className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className='hero-button'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className='shopping'>
                <p>Also Available on</p>
                <div className='brand-icons'>
                    <img src={brands} alt="brndimg" />
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src={heroimg} alt="himg" />
        </div>
    </div>
  )
}
