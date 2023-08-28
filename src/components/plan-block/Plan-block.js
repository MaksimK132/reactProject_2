import "./plan-block.css";

import classic_plan_image from "./../../img/classic-plan-image.png"
import seasonal_plan_image from "./../../img/seasonal-plan-image.png"
import luxe_plan_image from "./../../img/luxe-plan-image.png"
import service_image_1 from "./../../img/service-image-1.png"

const Plan_block = () => {
    return (
        <>
            <div className="plan-block">
                <div className="plan-grid">
                    <div className="plan-demo plan-info"> 
                        <div className="plan-container">
                            <p className="build-tittle">Build Your Subscription</p>
                            <p className="select-tittle">Selecting a Plan</p>
                            <p className="select-text">Enjoy free shipping on every order and save up to 30%. 
                                Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel
                                your subscription, simply log in to your account dashboard. You're in complete control of your flower delivery
                                experience.</p>
                            <div className="select-plan-blocks">
                                <ul className="plan-blocks-list">
                                    <li className="plan-blocks-item">
                                        <div className="plan-top-block">
                                            <img src={classic_plan_image} alt="" className="plan-image"/>
                                            <div className="plan-description">
                                                <p className="plan-name">Classic</p>
                                                <ul className="plan-condition-list">
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Price $45</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Free Delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Best for a budget</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Glass vase with first delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Save up to 25%</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="plan-button">Select</button>
                                    </li>
                                    <li className="plan-blocks-item">
                                        <div className="plan-top-block">
                                            <img src={seasonal_plan_image} alt="" className="plan-image"/>
                                            <div className="plan-description">
                                                <p className="plan-name">Seasonal</p>
                                                <ul className="plan-condition-list">
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Price $65</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Free Delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Best seasonal selections</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Glass vase with first delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Luxury candle with your first delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Save up to 28%</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="plan-button">Select</button>
                                    </li>
                                    <li className="plan-blocks-item">
                                        <div className="plan-top-block">
                                            <img src={luxe_plan_image} alt="" className="plan-image"/>
                                            <div className="plan-description">
                                                <p className="plan-name">Luxe</p>
                                                <ul className="plan-condition-list">
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Price $95</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Free Delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Premium arrangement</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Premium vase with first delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Luxury candle with your first delivery</p>
                                                    </li>
                                                    <li className="plan-condition-item">
                                                        <div className="plan-dot"></div>
                                                        <p className="plan-condition-text">Save up to 30%</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="plan-button">Select</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="select-line"></div>
                            <p className="often-tittle">How often do you want flowers delivered ?</p>
                            <p className="frequency-tittle">Select the delivery frequency</p>
                            <div className="frequency-buttons">
                                <button className="frequency-button">Monthly</button>
                                <button className="frequency-button">Bi-Weekly</button>
                                <button className="frequency-button">Weekly</button>
                            </div>
                            <div className="select-line"></div>
                            <p className="how-many-tittle">How many deliveries would you like ?</p>
                            <p className="how-many-text">Pay once and do not worry about flowers, our bouquets will be beautiful and on time,
                                as many times as you need 
                            </p>
                            <div className="quantity-clicker"></div>
                            <div className="select-line"></div>
                            <button className="checkout-button">Checkout</button>
                        </div>
                    </div>
                    <div className="plan-demo-right plan-big-image">
                        <img src={service_image_1} alt="" className="sub-plan-image"/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Plan_block;