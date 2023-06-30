import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sales from "../../Api/HomepageData/TodaySalesData"
import "../TodaySale/TodaySales.css"
const TodaySales = () => {
  
  const [inc, setinc]=useState(0)
  
  return (
    <div>
    <div className="TodaySalesWrapper">
    <div className="salesTitle">
    <h3>Today Sales</h3> 
    <Link to="/items">See All</Link>
    </div>
    <div className="leftArrow">
    <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div className="product">
    
    {
      Sales.map((ele,index)=>{
        const {url, offer, offerend}=ele;
        return(<>
          <div className="salesCard">
    <img src={url} alt="A product Images" inc={url[index]}/>
    <div className="salesBtn">
    <button>Up to {offer}</button>
  <span>
  {offerend}
  </span>
    </div>
    </div>
          </>)
      })
    }
  

    </div>
    <div className="rightArrow">
    <i class="fa fa-chevron-right" onClick={()=>setinc(inc++)} aria-hidden="true"></i>
    </div>
    </div>
    </div>
  )
}

export default TodaySales