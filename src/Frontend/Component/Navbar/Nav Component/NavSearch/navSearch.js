import React from 'react'
import "../NavSearch/navSearch.css"
const NavSearch = () => {
  return (
    <div>
    <div className="navsearchBarWrapper">
    <div className="navSearchDropMenu">

    <form action="">
    <label htmlFor="lists">All</label>
    <select name="lists" id="list"> 
    <option value=""></option>
    <option value="All">All Category</option>
    <option value="Alexa_Skills">Alexa Skills</option>
    <option value="Amazon_Fashion">Amazon Fashion</option>
    <option value="Book">Book</option>
    <option value="Baby">Baby</option>
    <option value="Beauty">Beauty</option>
    <option value="Cars & Motorbike">Cars & Motobike</option>
    <option value="Clothing and Accessories">Clothing and Accessories</option>
    <option value="Clomputer and Accessories">Computer and  Accessories </option>
    <option value="Deals">Deals</option>
    <option value="Electronic">Electronic</option>
    <option value="Furniture">Furniture</option>
    <option value="Garden">Garden & Outdoor</option>
    <option value="GiftCard">Gift Card</option>
    <option value="Gourment">Grocery & Gourment</option>



    </select>
    </form>
    </div>
    <div className="searcInput">
    <input type="text"  />
    <div className="searcbBtn">
    <i class="fa fa-search"></i>
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default NavSearch
