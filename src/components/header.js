import React from "react";
import Logo from '../logo.svg'
import { Link } from "react-router-dom";
const header = () => {
    return (
        <div className="header-container mx-auto mxw-1220 px-20">
            <div className="site-logo">
            <Link to={`/`}><img src={Logo}></img></Link>
            </div>
            <div className="nav-menu">
                <ul>
                    <li><Link to={`/React-App/`}>Home</Link></li>
                    <li><Link to={`/React-App/about`}>About</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default header;