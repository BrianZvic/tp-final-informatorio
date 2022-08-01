import React from "react";
import { FaAngleUp } from "react-icons/fa";
import "./buttonscroll.css"

function ButtonScroll() {

    function ScrollToTop(){
        window.scrollTo(0,0).animate(500)

    }

    return(
        <span className="footer-up" onClick={ScrollToTop}><FaAngleUp></FaAngleUp></span>

    )
}

export default ButtonScroll;