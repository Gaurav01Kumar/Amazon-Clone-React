import React from 'react';
import "../Card2/Card.css";
const TwoItemCard = (props) => {
  return (
    <div>
    <div className="mainCardWrapper">
    <div className="CardTitle">
    <h2>{props.title}</h2>
    </div>
    <div className="CardImage"> 
    <img src={props.img} alt="Product Images"  />
    </div>
    </div>
    </div>
  )
}

export default TwoItemCard;