import "./contact-us-left-column.css";

import phone_image from "./../../img/phone.png"
import location_image from "./../../img/location.png"

const Contact_us_left_column = () => {
    return (<div className="contact-us-left-column">
                <div className="left-column-grid">
                    <div className="left-column-demo book-call border">
                        <p className="book-tittle">To Contact Us</p>
                        <p className="book-text">We will call you back</p>
                        <div className="input-inner">
                            <input type="text" placeholder="+380 XX XXX XX XX" className="input-form"/>
                            <button className="book-call-button">book a call </button>
                        </div>
                    </div>
                    <div className="left-column-demo phone-tittle border-2">
                        <p className="phone-tittle-text">Phone</p>
                    </div>
                    <div className="left-column-demo address-tittle border">
                        <p className="address-tittle-text">Address</p>
                    </div>
                    <div className="left-column-demo phone-inner border-2">
                        <div className="phone-block">
                            <img src={phone_image} alt="" className="phone-image"/>
                            <p className="phone-number">+380980099777</p>
                        </div>
                        <div className="phone-block">
                            <img src={phone_image} alt="" className="phone-image"/>
                            <p className="phone-number">+380980099111</p>
                        </div>
                    </div>
                    <div className="left-column-demo address-inner border">
                        <p className="oppening-hours">opening hours: 8 to 11 p.m.</p>
                        <div className="location-info">
                            <img src={location_image} alt="" className="location-image"/>
                            <p className="location-info-text">15/4 Khreshchatyk Street, Kyiv </p>
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default Contact_us_left_column;