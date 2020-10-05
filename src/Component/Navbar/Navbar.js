import { Link } from "react-router-dom";
import React from 'react';
import { useContext } from 'react';
import { GlobalVlaue } from '../GlobalValue/GlobalValue';
import logo from '../Images/logos/Group 1329.png'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(GlobalVlaue);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link to='/home' className="navbar-brand" >
                    <img src={logo} width="125" height="50" class="d-inline-block align-top" alt="" />
                </Link>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav AltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/" className="nav-item nav-link">Donation</Link>
                        <Link to="/" className="nav-item nav-link">Events</Link>
                        <Link to="/" className="nav-item nav-link">Blog</Link>
                        <Link to="/admin/alluser" className="nav-item nav-link">Admin</Link>
                        <Link to="/login">
                            <button className="btn btn-primary">{loggedInUser.email ? loggedInUser.name : 'Log in'}</button>
                        </Link>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;