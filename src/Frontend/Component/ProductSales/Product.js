import React from 'react'
import "../ProductSales/Product.css";

const Product = (props ) => {
  const PData=props.PData;
  return (
    <div>
    <div className="productMainWrapper">
    <h2 className="heading">{props.text}</h2>
    <div className="PleftArrow">
    <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div className="imageContainer">
    {
         PData.map((ele)=>{
           const {url}=ele;
           return (
             <>
             <div className="img" key={PData.id}>
             <img src={url} alt="A Product" />
             </div>
             </>
           )
         })
    }
    </div>
    <div className="PrightArrow">
    <i class="fa fa-chevron-right"  aria-hidden="true"></i>
    </div>

    </div>
    </div>
  )
}

export default Product