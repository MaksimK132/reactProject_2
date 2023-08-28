import "./home-header.css";

import {homeHeaderProductItems} from "./../../utils/homeHeaderProductList"
import Home_header_product_item from "../home-header-product-item/Home-header-product-item";

import home_header_image from "./../../img/home-header-image.png"

const Home_header = () => {
    return (<div className="home-header">
                <div className="home-header-grid">
                    <div className="home-header-demo header border">
                        <p className="home-header-tittle">Kyiv LuxeBouquets</p>
                        <p className="home-header-text">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with
                                Our Online Flower Delivery Service
                        </p>
                        <div className="header-line-1"></div>
                        <div className="header-bottom-block">
                                <img src={home_header_image} alt="" className="home-header-image"/>
                                <div className="header-line-2"></div>
                                <p className="bottom-header-text">Experience the joy of giving with our modern floral studio. Order online and send fresh product,
                                    plants and gifts today.
                                </p>
                        </div>
                    </div>
                    {homeHeaderProductItems.map((item, index) => {
                                        return <Home_header_product_item key={index} index={index} categoryName={item.categoryName} arrowImage={item.arrowImage} productImage={item.productImage} tittleClassName={item.tittleClassName} imageClassName={item.imageClassName} shopClassName={item.shopClassName} />;
                                    })}
                    <div className="home-header-demo home-header-null"></div>    
                </div>
            </div>);
}
 
export default Home_header;