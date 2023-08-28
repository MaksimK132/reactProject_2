import "./faq-block.css";

import faq_arrow_down from "./../../img/faq-arrow-down.png"
import faq_arrow_up from "./../../img/faq-arrow-up.png"

const Faq_block = () => {
    return (
        <>
            <div className="faq-block">
                <div className="faq-grid">
                    <div className="faq-demo faq-info">
                        <div className="faq-square">
                            <p className="faq-tittle">Subscription FAQ</p>
                            <ul className="faq-list">
                                <li className="faq-item">
                                    <div className="faq-first-top">
                                        <p className="list-first-tittle">How often will I get a new bouquet?</p>
                                        <img src={faq_arrow_up} alt="" className="faq-up-arrow"/>
                                    </div>
                                    <p className="faq-first-list-text">Our subscriptions allow you to select a delivery frequency that best suits your
                                        needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your
                                        subscription. Choose any combination that works for you!
                                    </p>
                                    <div className="faq-list-line"></div>
                                </li>
                                <li className="faq-item">
                                    <div className="faq-top">
                                        <p className="list-tittle">Can i send subscription like as a gift ?</p>
                                        <img src={faq_arrow_down} alt="" className="faq-down-arrow"/>
                                    </div>
                                    <div className="faq-list-line"></div>
                                </li>
                                <li className="faq-item">
                                    <div className="faq-top">
                                        <p className="list-tittle">Can I choose which bouquet I get ?</p>
                                        <img src={faq_arrow_down} alt="" className="faq-down-arrow"/>
                                    </div>
                                    <div className="faq-list-line"></div>
                                </li>
                                <li className="faq-item">
                                    <div className="faq-top">
                                        <p className="list-tittle">Can I change the shipping address ?</p>
                                        <img src={faq_arrow_down} alt="" className="faq-down-arrow"/>
                                    </div>
                                    <div className="faq-list-line"></div>
                                </li>
                                <li className="faq-item">
                                    <div className="faq-top">
                                        <p className="list-tittle">What day will the subscription bouquet come?</p>
                                        <img src={faq_arrow_down} alt="" className="faq-down-arrow"/>
                                    </div>
                                    <div className="faq-list-line"></div>
                                </li>
                                <li className="faq-item">
                                    <div className="faq-top">
                                        <p className="list-tittle">Can I suspend my subscription to flowers ?</p>
                                        <img src={faq_arrow_down} alt="" className="faq-down-arrow"/>
                                    </div>
                                    <div className="faq-list-line"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Faq_block;