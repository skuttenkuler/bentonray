import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css'
const sideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if (props.show) {
        drawerClasses = 'side_drawer open';
    }
    return(
    <nav className={drawerClasses}>
                        <ul>
                            <li><Link to="/Bio" style={{ textDecoration: 'none' }}><h3>About</h3></Link></li>
                            <li><Link to="/Tour" style={{ textDecoration: 'none' }}><h3>Shows</h3></Link></li>
                            <li><Link to="/Merch" style={{ textDecoration: 'none' }}><h3>Merch</h3></Link></li>
                            <li><Link to="/Contact" style={{ textDecoration: 'none' }}><h3>Contact</h3></Link></li>
                            <li>
                                <a className="side_icon" href="http://youtube.com/channel/UCHkp1wU18sr0FUBJUaVc7Yw" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube" aria-hidden="true"/>
                                </a>
                            </li>
                            <li>
                                <a className="side_icon" href="http://instagram.com/bentonrayy/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram" aria-hidden="true"/>
                                </a>
                            </li>
                            <li>
                                <a className="side_icon" href="http://twitter.com/bentonrayy" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter-square" aria-hidden="true"/>
                                </a>
                            </li>

                            <li>
                                <a className="side_icon" href="http://facebook.com/BentonRayy/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square" aria-hidden="true"/>
                                </a>
                            </li>
                        </ul>

    </nav>
    )};

export default sideDrawer;
