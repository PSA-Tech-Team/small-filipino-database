<<<<<<< HEAD
import './Header.css';
import Filter_Bar from "./Filter_Bar.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./Login.jsx";


function Header() {
    return (
        
        //what ever is written in here displays as the header of the website
        <header>
            <div className='head'>
            {/* replace with link to actual home page */}
            <a href="https://www.youtube.com/@jdarmedilla"><img className='header_image' src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png" alt="Philippine Student Association Logo"/></a>
                <h1 className="site_name">
                    Small Filipino Business Database
                </h1>
                <button className="logInButton"> </button>
            </div>
        </header>
    );
}

=======
import './Header.css';
import Filter_Bar from "./Filter_Bar.jsx";
import React from 'react';
import Login from "./Login.jsx";
import { Link } from "react-router-dom";


function Header() {
    return (
        
        //what ever is written in here displays as the header of the website
        <header>
            <div className='head'>
            {/* replace with link to actual home page */}
            <Link to="/">
                <img className='header_image' src="https://www.psauiuc.org/wp-content/uploads/2024/09/Logo-no-words-no-circle-300x300.png" alt="Philippine Student Association Logo"/>
            </Link>
                <h1 className="site_name">
                    Small Filipino Business Database
                </h1>
            <Link to="/login">
                <button className="logInButton"> </button>
            </Link>
                
            </div>
        </header>
    );
}

>>>>>>> b81d6c17a139db0f5ce04c4b1ea768e0d1b3a9a5
export default Header;