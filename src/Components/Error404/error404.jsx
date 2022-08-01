import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./error404.css"
import {Link } from 'react-router-dom';

function Error404(){


    return(
        <section className="errorconteiner">
            <Header></Header>
            <div className="error404-content">
                <h4>404</h4>
                <p>Page not found</p>
                <Link to="/"><span>GO BACK TO OUR HOMEPAGE</span></Link>
            </div>
            <Footer></Footer>
        </section>


    )
}

export default Error404