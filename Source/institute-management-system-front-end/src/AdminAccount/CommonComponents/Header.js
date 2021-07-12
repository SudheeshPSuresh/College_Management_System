import React, { Component } from 'react';
import AuthenticationService from '../../AuthenticationComponents/AuthenticationService';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

import './Style.css';

class Header extends Component {
    render() {
        const isAdminLogin = AuthenticationService.isAdminLoggedIn();

        if(!isAdminLogin){
            this.props.history.push('/admin-login');
        }

        console.log(isAdminLogin);
    
        return(
            <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div><a href="#" className="navbar-brand">Admin Home</a></div>
                   <ul className="navbar-nav">
                   </ul>
                   <ul  className="navbar-nav navbar-collapse justify-content-end">
                        {!isAdminLogin && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isAdminLogin &&  <li><Link to="/admin-login" className="nav-link"  onClick={AuthenticationService.adminLogout}>Logout</Link></li>}
                   </ul>
               </nav>
            </header> 
        );
    }
}

export default Header;