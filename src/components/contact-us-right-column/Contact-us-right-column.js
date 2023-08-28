import "./contact-us-right-column.css"
import Socials from "../socials/Socials";

import contact_us_image from "./../../img/contact-us-image.png"

const Contact_us_right_column = () => {
    return (<div className="contact-us-right-column">
                <div className="right-column-grid">
                    <div className="right-column-demo-right contact-us-image">
                        <img src={contact_us_image} alt="" className="hero-service-image"/>
                    </div>
                    <div className="right-column-demo follow-us-tittle border-2">
                        <p className="follow-us-text">Follow us</p>
                    </div>
                    <div className="right-column-demo-right socials-block">
                        <Socials />
                    </div>
                </div>
            </div>);
}
 
export default Contact_us_right_column;