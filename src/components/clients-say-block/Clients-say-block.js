import "./clients-say-block.css";

import google_image from "./../../img/google.png"
import left_carousel_arrow from "./../../img/left-carousel-arrow.png"
import right_carousel_arrow from "./../../img/right-carousel-arrow.png"

const Clients_say_block = () => {
    return (
        <>
                    <div className="our-service-demo-right clients-say">
                        <div className="clients-say-container">
                            <div className="clients-say-content">
                                <img src={google_image} alt="" className="google-image"/>
                                <p className="reviews-tittle">Reviews</p>
                                <p className="clients-say-text">Our Clients say</p>
                                <div className="carousel-block">
                                    <img src={left_carousel_arrow} alt="" className="left-carousel-arrow"/>
                                    <div className="carousel-text-block">
                                        <p className="client-text">“Ordered flowers online and they were the best bouquet! Impressed everyone around.
                                            Highly recommend this flower shop!”
                                        </p>
                                        <p className="client-name">– Ronald Richards</p>
                                    </div>
                                    <img src={right_carousel_arrow} alt="" className="right-carousel-arrow"/>
                                </div>
                                <button className="clients-say-button">Read reviews</button>
                            </div>
                        </div>
                    </div>
        </>
    );
}
 
export default Clients_say_block;