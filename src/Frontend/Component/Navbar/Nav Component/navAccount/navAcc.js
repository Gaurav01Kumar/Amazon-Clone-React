import React, { useState } from 'react';
import "../navAccount/navAcc.css";
import { Link } from 'react-router-dom';
const NavAcc = () => {
  const [open , setOpen]=useState(false);
  return (
    <div>
    
    <div className="navBtnBoxAcc">
    <button className="navBtnAccount" onClick={()=>setOpen(!open)} onMouseLeave={()=>setOpen(false)}>
    Hello,Sign in <br />
    <span>Account & List <i class="fa fa-caret-down"></i> </span>
    </button>

    </div>
  { open && <div className="navAccLinkWrapper">
  <div className="navAccLinkBox">
  
  <button>SignIn</button>
  <div className="navlogTitle">
  <p>New Customer</p>
  <Link to="/" >Start here</Link>
  </div>
 
  </div>
  <div className="navAccLinkBox2">
  <div className="navAccLeft">
  <h2>Your Lists</h2>
  <Link to="/">Create a wishlist</Link>
  <Link to="/" >Wish from any website</Link>
  <Link  to="/">Baby wishlist</Link>
  <Link to="/">Discover your style</Link>
  <Link to="/">Explore your showroom</Link>
  </div>
  <div className="navAccright">
  <h2>Your Account</h2>
  <Link to="/">Your Account</Link>
  <Link to="/" >Your Order</Link>
  <Link to="/" >Your Wishlist</Link>
  <Link  to="/">Your Recodementaion</Link>
  <Link to="/">Your prime membership</Link>
  <Link to="/">Your Prime video</Link>
  <Link to="/">Your Giftcard Balance</Link>
  <Link to="/">Your Seller Account</Link>
  <Link to="/">Mange Your content & device</Link>
  </div>
  </div>
  <div className="triangle"></div>
}
  </div>
}

    </div>
  )
}

export default NavAcc
