import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link , NavLink} from "react-router-dom";
export default class Mainmenu extends Component {
    
    render() {
        return (    
           
            <div className="mainmenu" >
                <div
                    className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
                    role="banner">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="mr-auto">
                                <nav className="site-navigation position-relative text-right" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                                        
                                        <li>
                                            <Link to="/" >Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/khoa-hoc" >Lập trình C</Link>
                                        </li>
                                        <li>
                                            <Link to="/khoa-hoc" >Ardruino</Link>
                                        </li>
                                        <li>
                                            <Link to="/khoa-hoc" >Pic</Link>
                                        </li>
                                        <li>
                                            <NavLink to="/khoa-hoc" >Web co ban</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/khoa-hoc" >Proteus</NavLink>
                                        </li>
                                        <li className="dropdown">        
                                            <NavLink to="/lien-he" className="nav-link text-left dropdown-toggle" 
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Liên hệ</NavLink>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="/">Cộng đồng Facebook</a>
                                                <a className="dropdown-item" href="/">Another </a>
                                                
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
