import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
    return (
        <div className="collapse navbar-collapse offset">
            <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/shops">Shops</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/city">City</Link></li>
            </ul>
        </div>
    )
}