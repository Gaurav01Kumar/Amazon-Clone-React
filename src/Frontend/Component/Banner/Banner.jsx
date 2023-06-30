import React  from 'react'
 import "../Banner/Banner.css";
 import SimpleImageSlider from "react-simple-image-slider";
 
 
 const images=[
    {
        url:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/May/pTronBassbudsWave/JustLaunched/D45556566_WLA_pTron_Tangent_Urban_Tall_Hero_3000x1200._CB637085725_.jpg"
    },{
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/Under-499/Under_499_Tallhero_3000x1200._CB636754718_.jpg"
    }
    ,{
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/Herotator/Homepage_DesktopHeroTemplate_3000x1200V1._CB637137376_.jpg"
    }
    ,{
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Apr-hero/Apay/Deals-3000._CB623368300_.jpg"
    },{
      url:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/April2022GW/New_FDFO_Apay_ICICI/Watches/PC_watches_2x_3000x._CB623853632_.jpg"
    },
];
const Banner = () => {

    
  return (
    <div>
    <div className="BannermainContainer">
    <SimpleImageSlider className="imga"
    style={{ objectFit: 'contain', height : '100%', cursor:"pointer"}}
    width={1534}
    height={494}
    images={images}
    
    showNavs={true}
    autoPlay={true}
  
  />
    </div>
    </div>
  )
}

export default Banner