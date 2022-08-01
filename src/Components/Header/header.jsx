import React from "react";
import "./header.css";
import logo from "../../Static/img/news-logo.png"


function Header(){

    return (
        <header className="Header">
            <img src={logo} alt="" />
            
        </header>
    )

}

export default Header;