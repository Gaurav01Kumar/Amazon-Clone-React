import React from 'react';
import "../Item/item.css"
import Nav from '../../Component/Navbar/Nav'
import Header from '../../Component/Header/Header'
import Footer from "../../Component/Footer/footer";
import EData from "../../Api/HomepageData/ItemData/EarphoneData"
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
  console.log(newRating);
};
const Item = (  ) => {
  return (
    <div>
    <div className="ItemPageMainContainer">
    <Nav/>
    <Header />
    <div className="itemMainContainer">
    <div className="itemsCountAndSort">
    <h4>5 <span>results</span></h4>
    <button>Sort by : Feature <i class="fa fa-angle-down" aria-hidden="true"></i></button>
    </div>

    <div className="product">
   <div className="itemcontainerLeftPart">
   <h3>Department</h3>
   <span>Electronic</span>
   <div className="itemRatingBox">
   <h3>Avg. Customer Review</h3>
<div className="raitngBox"> 
<div className="ratingFirst">
<ReactStars
count={5}
onChange={ratingChanged}
size={24}
activeColor="#ffd700"
isHalf={true}

/>
<span>& Up</span>
</div>
<div className="ratingFirst">
<ReactStars
count={5}
onChange={ratingChanged}
size={24}
activeColor="#ffd700"
isHalf={true}

/>
<span>& Up</span>
</div>
<div className="ratingFirst">
<ReactStars
count={5}
onChange={ratingChanged}
size={24}
activeColor="#ffd700"
isHalf={true}

/>
<span>& Up</span>
</div>
<div className="ratingFirst">
<ReactStars
count={5}
onChange={ratingChanged}
size={24}
activeColor="#ffd700"
isHalf={true}

/>
<span>& Up</span>
</div>



</div>
<div className="ButtonBox">
<p>Deals</p>
<input type="checkbox" name="check" id="" />
<label htmlFor="check">Today's Deals</label>
<p>Pay On Delivery </p>
<input type="checkbox" name="check" id="" />
<label htmlFor="check">Eligible for Pay On Delivery</label>
<p>Availability</p>
<input type="checkbox" name="check" id="" />
<label htmlFor="check">Include Out of Stock</label>
</div>
   </div>
   </div>
   <div className="itemcontainerRightPart">
   <h1>RESULTS</h1>
   <div className="Item">
   {
        EData.map((val)=>{
          const {iname,url,price}=val;
          return(<>
            <div className="itemsWrapper">
   <img src={url} alt="A Product Images" />
   <h3>{iname}</h3>
   <div className="rating">

   
<ReactStars
count={5}
onChange={ratingChanged}
size={24}
activeColor="#ffd700"
isHalf={true}

/>
<span>77</span>

   </div>
   <button>Deals of  the Day</button>
   <div className="price">
   <h3 className="Price">{price}</h3>
   <span>(12% off) </span>
   </div>
   <span>FREE Delivery by Amazon</span>
   </div>
            
            </>)
        })
   }
   
   </div>
   </div>
   </div>
    </div>
    <Footer />
    </div>
    </div>
  )
}

export default Item