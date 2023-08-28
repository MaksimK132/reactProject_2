import "./about-block.css";

import { NavLink } from "react-router-dom";

const About_us_block = () => {
    return (<div className="about-us-block">
                <div className="about-us-grid">
                    <div className="about-us-demo about-block-left border">
                        <p className="about-us-tittle">About us</p>
                    </div>
                    <div className="about-us-demo-right about-block-right">
                        <p className="our-story">OUR STORY</p>
                        <p className="about-right-tittle">Kyiv LuxeBouquets</p>
                        <p className="about-right-text">We are a modern local floral studio, which specializes in the design and delivery
                            of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly
                            with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists
                            in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants,
                                as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing
                                by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.
                        </p>
                        <NavLink to="/about-us-page" className="to-about-button">
                            <button className="about-right-button">LEARN MORE</button>
                        </NavLink>
                    </div>
                </div>
            </div>);
}
 
export default About_us_block;