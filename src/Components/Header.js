import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
        <header className="jumbotron">
         <div className="container">
             <h2 className='welcoming'>Welcome to my Sievo React assignment</h2>            
             <p className="welcoming">Developer contact: nhannguyen051195@gmail.com</p> 
             <span className='LinkedIn'><a href="https://www.linkedin.com/in/nhan-nguyen-a1a6b5174/"><i className="fab fa-linkedin"/></a></span>
             <span className='LinkedIn'><a href="https://www.facebook.com/nguyentrongnhannammeu"><i class="fab fa-facebook"></i></a></span>

            
         </div>
        </header>
            </div>
        );
    }
}

export default Header;