import React from "react";
import Logo from '../logo.svg'
import { Link } from "react-router-dom";
const header = (props) => {
    return (
        <div name={props.name} data-name={props.data} className="header-container mx-auto mxw-1220 px-20">
            <div className="site-logo">
            <Link to={`/React-App`}><img src={Logo} alt="site-logo"></img></Link>
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