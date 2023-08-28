import "./contact-us-block.css";

import Contact_us_left_column from "../contact-us-left-column/Contact-us-left-column";
import Contact_us_right_column from "../contact-us-right-column/Contact-us-right-column";

const Contact_us_block = () => {
    return (<div className="contact-us-block">
                <Contact_us_left_column />
                <Contact_us_right_column />
            </div>);
}
 
export default Contact_us_block;