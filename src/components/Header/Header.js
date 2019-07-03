import React from 'react';
import { Link } from 'react-router-dom';

import DrawerButton from '../SideDrawer/DrawerButton'


import './Header.css'
const Header = props => (
            <header className="header_container">
                <div className="header_nav">
                        <div className="header_toggle-button">
                            <DrawerButton click={props.drawerClickHandler}/>
                        </div>
                        <div className="header_logo">
                            <Link  to="/" style={{ textDecoration: 'none' }}>
                        <img className="header_image" src={require('../images/Benton_head.png')} alt=""/>

                        <h1>Benton Ray</h1>
                        </Link>
                        </div>

                   <div className="header_icons">
                        <ul>
                            <li>
                                <a href="http://youtube.com/channel/UCHkp1wU18sr0FUBJUaVc7Yw" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube" aria-hidden="true"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://instagram.com/bentonrayy/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram" aria-hidden="true"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://twitter.com/bentonrayy" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter-square" aria-hidden="true"/>
                                </a>
                            </li>

                            <li>
                                <a href="http://facebook.com/BentonRayy/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square" aria-hidden="true"/>
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>
            </header>

        );

export default Header;
