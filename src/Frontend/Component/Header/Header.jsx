import React from 'react'
import {Link} from "react-router-dom";
import "../Header/Header.css"
const Header = () => {
  return (
    <div>
      <div className="headermainContainer">
      <div className="sidemenuBtn">
      <i class="fa fa-bars"></i> All
      </div>
      <Link to="/items">Best Sellers</Link>
      <Link to="/items"> Mobiles</Link>
      <Link to="/items"> Customer Service</Link>
      <Link to="/items"> Today's Deals</Link>
      <Link to="/items"> Fashion</Link>
      <Link to="/items">Electronics</Link>
      <Link to="/items">Home & Kitchen</Link>
      <Link to="/items">New Releases</Link>
      <Link to="/items">Books</Link>
      <Link to="/items">Computers</Link>
      <Link to="/items">Coupons</Link>
     
      </div>
       { 
//       <div className="menu-bar">
//       <div className="sidebar-logo">
//           <h2>Shopping Club</h2>
//           <img src="Image/logocart.png" alt=" Logo Images" /> 
//           <div className="close">
//           <img src="Image/Icon/close-btn.png" alt="" height="35px" id="Close-btn" /> 
//       </div>
//       </div>
//   <div className="side-content">
//       <div className="content box1">
//           <h2>Trending</h2>
//           <div className="link">
//               <Link to="#">Best Seller</Link>
//           </div>
//           <div className="link">
//               <Link to="#">New Release</Link>
//           </div>
//           <div className="link">
//               <Link to="#">Mover and Shakers</Link>
//           </div>
//       </div>
//       <hr/>
//       <div className="content box2">
//            <h2>Digital Content And Devices</h2>
//            <div className="link box2">
//            <Link to="#">Google Home & Alexa</Link>
//            <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
//           </div>
//           <div className="link box2">
//            <Link to="#"> Android Tv</Link>
//            <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
//           </div>
//           <div className="link box2">
//            <Link to="#"> Home Theather</Link>
//            <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
//           </div>
//       </div>
//       <hr/>
//       <div className="content box3">
//           <h2>Shop By Department</h2>
//           <div className="link linkbox3">
//           <Link to="#"> Mobiles,Computer</Link>
//           <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
//       </div>
//       <div className="link linkbox3">
//           <Link to="#">Tv, Appliance, Electronic</Link>
//           <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
//       </div>
//       <div className="link linkbox3">
//           <Link to="#"> Men's Fashion</Link>
//           <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
//       </div>
//       <div className="link linkbox3">
//           <Link to="#">Womens's Fashion</Link>
//           <Link to="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></Link>
//           </div>
//           <div className="link linkbox3 down">
//           <Link to="#"> See all   <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
//           </div>
//       </div>
//       <hr/>
//       <div className="content box4">
//           <h2>Help & Setting </h2>
//           <div className="link">
//               <Link to="#">Your Account</Link>
//           </div>
//           <div className="link">
//               <Link to="#">Customer Service</Link>
//           </div>
//           <div className="link ">
//               <Link to="#"> Sign In</Link>
//           </div>
//       </div>
//   </div>
//   </div>
      }
    </div>
  )
}

export default Header
