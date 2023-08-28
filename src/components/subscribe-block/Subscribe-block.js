import "./subscribe-block.css";

import { NavLink } from "react-router-dom";

import service_image_1 from "./../../img/service-image-1.png"

const Subscribe_block = () => {
    return (<>
                <div className="our-service-demo our-service-image-1 border">
                        <img src={service_image_1} alt="" className="service-hero-1"/>
                    </div>
                    <div className="our-service-demo-right our-service-subscribe">
                        <p className="subscribe-tittle">service</p>
                        <p className="subscribe-big-tittle">Flower Subcriptions</p>
                        <p className="subscribe-text">Experience the convenience and savings of regular flower deliveries with our flexible
                            subscription service - up to 30% more profitable than one-time purchases.
                        </p>
                        <NavLink to="/subscription-page" className="to-subscription-button">
                            <button className="subscribe-button">Subscribe Now</button>
                        </NavLink>
                    </div>
            </>);
}
 
export default Subscribe_block;