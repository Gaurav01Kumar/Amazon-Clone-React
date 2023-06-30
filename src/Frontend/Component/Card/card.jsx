import React from 'react'
import "../Card/card.css"
import {Link} from "react-router-dom"
const Card = (props ,{children} ) => {
  return (
    <div>
    <div className="mainCardContainer">
    <h3 className="cardHeading">{props.title} </h3>
    <div className="cardWrapper">
   
        <div className="card">
        <img src={props.imga} alt="" />
        <span>{props.pTitle}</span>
        </div>
        <div className="card">
        <img src={props.imga1} alt="" />
        <span>{props.pTitle1}</span>
        </div>
        <div className="card">
        <img src={props.imga2} alt="" />
        <span>{props.pTitle2}</span>
        </div>
        <div className="card">
        <img src={props.imga3} alt="" />
        <span>{props.pTitle3}</span>
        </div>
    
    </div>
    <Link to="/items" className="explore-more"> {props.link}</Link>
    </div>
  
    </div>
  )
}

export default Card