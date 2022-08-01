
import React from "react";
import "./cardnew.css"
import { DateTime } from "luxon";


function CardNews({data}){
        const {title,description,publishedAt,urlToImage,url} = data
        const date = DateTime.fromISO(publishedAt).toFormat("'Publicado: 'D 'a las ' HH':'mm 'hs'")


    return(
        <a className="cardnew-container" href={url} target="_blank" >
            <li className="cardnew-content">
                <span className="cardnew-info">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{date}</p>
                </span>
                <span className="cardnew-img">
                    <img src={urlToImage}  />
                </span>

            </li>
        </a>
        

    )

}
export default CardNews;