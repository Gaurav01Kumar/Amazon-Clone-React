import React from 'react';
import { Link } from 'react-router-dom';
import "../Footer/footer.css"
import NavLogo from "../Navbar/Nav Component/NavLogo/navLogo"
const Footer = () => {
  return (
    <div>
    <div className="FooterMainContainer">
    <div className="FooterContent1">
    <div className="FooterBox">
    <h3>Get To Know Us</h3>
    <Link to="/about">About Us</Link>
    <Link to="/Carees">Careers</Link>
    <Link to="/location">Press Releases</Link>
    <Link to="/location">Amazon Cares</Link>
    <Link to="/location">Gift a Smile</Link>
    <Link to="/location">Amazon Science</Link>
    </div>
    <div className="FooterBox">
    <h3>Connect with Us</h3>
    <Link to="/facebook">Facebook</Link>
    <Link to="/twitter">Twitter</Link>
    <Link to="/Instagram">Instagram</Link>
    </div>
    <div className="FooterBox">
    <h3>Make Money with Us</h3>
    <Link to="/location">Sell on Amazon</Link>
    <Link to="/location">Sell under Amazon Accelerator</Link>
    <Link to="/location">Amazon Global Selling</Link>
    <Link to="/location">Become an Affiliate</Link>
    <Link to="/location">Become an Affiliate</Link>
    <Link to="/location">Fulfilment by Amazon </Link>
    <Link to="/location"> Advertise Your Products</Link>
    <Link to="/location">Amazon Pay on Merchants</Link>
    </div>
    <div className="FooterBox">
    <h3>Let Us Help You</h3>
    <Link to="/location">COVID-19 and Amazon</Link>
    <Link to="/location">Your Account</Link>
    <Link to="/location">Return Center</Link>
    <Link to="/location">100% Purchase Protection </Link>
    <Link to="/location">Amazon App Download</Link>
    <Link to="/location">Amazon Assistant Download</Link>
    <Link to="/location">Help</Link>
    </div>
    </div>
    <div className="FooterContent2">
    <div className="FooterErapper">
    <NavLogo />
    <button><i class="fa fa-globe" aria-hidden="true"> <span>English</span></i></button>
    </div>
    <div className="FooterErapper2">
   <Link to="/location">Austraila</Link>
   <Link to="/location">Brazil</Link>
   <Link to="/location">Cananda</Link>
   <Link to="/location">France</Link>
   <Link to="/location">China</Link>
   <Link to="/location">Germany</Link>
   <Link to="/location">Italy</Link>
   <Link to="/location">Japan</Link>
   <Link to="/location">Mexico</Link>
   <Link to="/location">Netherlands</Link>
   <Link to="/location">Polands</Link>
   <Link to="/location">Singapore</Link>
   <Link to="/location">Spain</Link>
   <Link to="/location">Turkey</Link>
   <Link to="/location">United Kingdom</Link>
   <Link to="/location">India</Link>
   <Link to="/location">United States</Link>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer