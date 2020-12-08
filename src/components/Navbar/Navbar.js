import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css'




const Navbar = (props) => (
            <div className="nav_container">
                <nav className="navbar_nav">
                    <div className="navbar_items">
                        <ul>
                            <li><Link to="/Bio" style={{ textDecoration: 'none' }}><h2>About</h2></Link></li>
                            <li><Link to="/Tour" style={{ textDecoration: 'none' }}><h2>Shows</h2></Link></li>
                            <li><Link to="/Merch" style={{ textDecoration: 'none' }}><h2>Merch</h2></Link></li>
                            {/* <li><Link to="/Contact" style={{ textDecoration: 'none' }}><h2>Contact</h2></Link></li> */}
                        </ul>
                    </div>
                </nav>
            </div>

        );
export default Navbar;