import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
    return (
        <>
            <Link to="/shops">Home</Link>
            
            <Link to="/">City</Link>
        </>
    )
}