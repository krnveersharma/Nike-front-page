import React from 'react'
import logo_img from "../images/brand_logo.png";
export default function Navbar() {
    return (
        <div>
            <nav className='container'>
                <div className="logo">
                    <img src={logo_img} alt="logo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
}
