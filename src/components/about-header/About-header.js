import "./about-header.css";

import inst_circle from "./../../img/inst-circle.png"
import pinterest_circle from "./../../img/pinterest-circle.png"
import facebook_circle from "./../../img/facebook-circle.png"
import twitter_circle from "./../../img/twitter-cirlce.png"
import telegram_circle from "./../../img/telegram-circle.png"
import about_us_header_image from "./../../img/about-us-header-image.png"

const About_header = () => {
    return (
        <>
            <div className="about-header">
                <div className="about-grid">
                    <div className="about-demo about-left border">
                        <ul className="about-us-header-tittle-list">
                            <li className="about-us-header-item">
                                <p className="about-us-header-tittle-text">Our Story</p>
                            </li>
                            <li className="about-us-header-item">
                                <p className="about-us-header-tittle-text">About</p>
                            </li>
                            <li className="about-us-header-item">
                                <p className="about-us-header-tittle-text">Kyiv LuxeBouquets</p>
                            </li>
                        </ul>
                        <p className="about-us-header-text">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our
                            Online Flower Delivery Service
                        </p>
                        <ul className="about-us-header-socials-list">
                            <li className="about-us-header-socials-item">
                                <img src={inst_circle} alt="" className="about-us-socilas-image"/>
                            </li>
                            <li className="about-us-header-socials-item">
                                <img src={pinterest_circle} alt="" className="about-us-socilas-image"/>
                            </li>
                            <li className="about-us-header-socials-item">
                                <img src={facebook_circle} alt="" className="about-us-socilas-image"/>
                            </li>
                            <li className="about-us-header-socials-item">
                                <img src={twitter_circle} alt="" className="about-us-socilas-image"/>
                            </li>
                            <li className="about-us-header-socials-item">
                                <img src={telegram_circle} alt="" className="about-us-socilas-image"/>
                            </li>
                        </ul>
                    </div>
                    <div className="about-demo-right about-right">
                        <img src={about_us_header_image} alt="" className="about-us-header-image"/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default About_header;