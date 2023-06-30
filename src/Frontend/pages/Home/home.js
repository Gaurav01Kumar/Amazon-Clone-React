import React from 'react'
import Nav from '../../Component/Navbar/Nav'
import "../Home/home.css"
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'
import Card from '../../Component/Card/card'
import TwoItemCard from '../../Component/Card2/TwoItemCard '
import TodaySales from '../../Component/TodaySale/TodaySales'
import Product from '../../Component/ProductSales/Product'
import bData from '../../Api/HomepageData/BeatuyProduct'
import PData from "../../Api//HomepageData//productData"
import AcData from '../../Api/HomepageData/computer&acc'
import Footer from '../../Component/Footer/footer'
const Home = () => {
  return (
    <div>
    <div className="homeMainWrapper">
    <Nav />
    <Header />
    <Banner />
    <div className="cardComponent">
   
    <Card
     title ={"Amazon Pay | Book your travel tickets"}
    imga= {"https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Travel_accessories_4._SY116_CB636958158_.jpg"}
    pTitle={ " Essential travel product"}
    imga1 = {"https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Train_2._SY116_CB636958158_.jpg"}
    pTitle1={" Train tickets"}
    imga2 = {"https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Bus_3._SY116_CB636958158_.jpg"}
    pTitle2={" Bus tickets"}
    imga3= {"https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/RevAprGW/Flight_1._SY116_CB636958158_.jpg"}
    pTitle3={"Flight tickets"}
    link={"Explore more from Amazon Pay "} 
   
    />  
    
    

    <Card
     title ={"Top rated, premium quality | Amazon Brands &"}
    imga= {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Home_QC_1X_V2_2._SY116_CB636581721_.jpg"}
    pTitle={ " Home Product"}
    imga1 = {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Furniture_1X_V2_4._SY116_CB636581721_.jpg"}
    pTitle1={" Furniture"}
    imga2 = {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Daily_essentials_QC_1X_V2_1._SY116_CB636581721_.jpg"}
    pTitle2={" Daily essential"}
    imga3= {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Softlines_QC_1X_V2_5._SY116_CB636581721_.jpg"}
    pTitle3={"Clothing essential"}
    link={"Explore more from Amazon Pay "} 
   
    />  
   
    <TwoItemCard title={"Up to 70% off | Clearance store "}  img={"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"} />
    </div>
    
  <TodaySales />
  <Product  PData={PData}  text={"4 star rated & above | Refurbished product"}/>
  <Product  PData={bData}  text={"Frequently repurchased in Beauty and Personal Care"}/>
  <Product  PData={AcData}  text={"Best Sellers in Computers & Accessories"}/>

  <div className="CardWrapper">
  
  <TwoItemCard title={"Up to 60% off | Fitness essentials to set up your home "}  img={"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg"} />
 <Card
 title ={"Clothing for all"}
imga= {"https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC_01._SY116_CB651157265_.jpg"}
pTitle={ " Kurtas | Up to 60% off"}
imga1 = {"https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC_02._SY116_CB651157265_.jpg"}
pTitle1={" Sarees | Up to 60% off"}
imga2 = {"https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC2_01._SY116_CB651157265_.jpg"}
pTitle2={" T-shirt | Up to 60% off"}
imga3= {"https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/WRS_DEC_21/PC/1x/WRS-GW-PC-QC2_02._SY116_CB651157265_.jpg"}
pTitle3={"Jeans | Up to 60% off"}
link={"See all deals "} 

/>  

<Card
title ={"Top rated, premium quality | Amazon Brands &"}
imga= {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Home_QC_1X_V2_2._SY116_CB636581721_.jpg"}
pTitle={ " Home Product"}
imga1 = {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Furniture_1X_V2_4._SY116_CB636581721_.jpg"}
pTitle1={" Furniture"}
imga2 = {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Daily_essentials_QC_1X_V2_1._SY116_CB636581721_.jpg"}
pTitle2={" Daily essential"}
imga3= {"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Softlines_QC_1X_V2_5._SY116_CB636581721_.jpg"}
pTitle3={"Clothing essential"}
link={"Explore more from Amazon Pay "} 

/>  

<TwoItemCard title={"Pest control, gardening & outdoor essentials "}  img={"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/379x304._SY304_CB621566454_.jpg"} /> 
  
  </div>
  <Product  PData={bData}  text={"Frequently repurchased in Beauty and Personal Care"}/>
  <Footer />
  </div>
    </div>
  )
}

export default Home