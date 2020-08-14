import React, {Component} from 'react';
import logo from './assets/logo.svg';
import './Navbar.scss'
import { NavLink , BrowserRouter} from 'react-router-dom';

class Navbar extends Component {

    render(){
        return(
            <div id="nav_bar">
                <BrowserRouter>
                <NavLink to="/" >
                    <div><img alt="logo" className="logo" src={logo} /></div>
                </NavLink>
                <ul className="ul">

                    <li className="li">
                        <NavLink exact to="/"  activeClassName='navbar_active' >
                            <div className="navBtn" >
                                HOME
                                </div>
                        </NavLink>
                    </li>

                    <li className="li">
                        <NavLink to="/book_now" activeClassName='navbar_active'>
                            <div className="navBtn">BOOK NOW</div>
                        </NavLink>
                    </li>

                    <li className="li">
                        <NavLink to="/about_us" activeClassName='navbar_active'>
                            <div className="navBtn">ABOUT US</div>
                        </NavLink>
                    </li>

                    <li className="li">
                        <NavLink to="/contact_us" activeClassName='navbar_active'>
                            <div className="navBtn">CONTACT US</div>
                        </NavLink>
                    </li>
                 
	            </ul>
             </BrowserRouter>
                
            </div>
        );
    }
}

export default Navbar;
