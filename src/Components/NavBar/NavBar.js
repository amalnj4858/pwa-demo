import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="nav">
            <Link to='/' className="options">
                Home
            </Link>
            <Link to='/notif' className="options">
                Push
            </Link>
        </div>
    );
}


