import "./subscription-header.css";

import subscription_hero_image from "./../../img/subsccription-hero-image.png"

const Subscription_header = () => {
    return (
        <>
            <div className="subscription-header">
                <div className="subscription-header-grid">
                    <div className="subscription-header-demo subscription-hero-image">
                        <img src={subscription_hero_image} alt="" className="subscription-image"/>
                    </div>
                    <div className="subscription-header-demo-right subscription-info">
                        <p className="flower-subscription-tittle">Flower Subscription</p>
                        <ul className="flower-subscription-list">
                            <li className="flower-subscription-item">
                                <p className="subscription-tittle">For Yourself</p>
                                <div className="flower-subscription-text-block">
                                    <div className="subscription-dot"></div>
                                    <p className="flower-subscription-text">The perfect way to keep your home fresh and beautiful. Get a regular delivery
                                        of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of
                                        fresh flowers hassle-free!
                                    </p>
                                </div>
                            </li>
                            <li className="flower-subscription-item">
                                <p className="subscription-tittle">As a Gift</p>
                                <div className="flower-subscription-text-block">
                                    <div className="subscription-dot"></div>
                                    <p className="flower-subscription-text">Simply provide us with their address and let us take care of the rest,
                                        delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.
                                    </p>
                                </div>
                            </li>
                            <li className="flower-subscription-item">
                                <p className="subscription-tittle">For Business</p>
                                <div className="flower-subscription-text-block">
                                    <div className="subscription-dot"></div>
                                    <p className="flower-subscription-text">Is a great way to create a pleasant atmosphere and leave a good impression
                                        on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business,
                                        and our service guarantees timely replacement without extra care or effort on your part.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <button className="flower-subscription-button">Explore Plans</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Subscription_header;