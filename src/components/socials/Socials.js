import "./socials.css";

import instagram from "./../../img/Instagram.png"
import pinterest from "./../../img/Pinterest.png"
import twitter from "./../../img/Twitter.png"
import telegram from "./../../img/Telegram.png"
import face_book from "./../../img/Facebook.png"

const Socials = () => {
    return (<ul className="socials-list">
                <li className="socilas-item">
                    <a href="" className="socials-link">
                        <img src={instagram} alt="" className="socials-image"/>
                    </a>
                </li>
                <li className="socilas-item">
                    <a href="" className="socials-link">
                        <img src={pinterest} alt="" className="socials-image"/>
                    </a>
                </li>
                <li className="socilas-item">
                    <a href="" className="socials-link">
                        <img src={face_book} alt="" className="socials-image"/>
                    </a>
                </li>
                <li className="socilas-item">
                    <a href="" className="socials-link">
                        <img src={twitter} alt="" className="socials-image"/>
                    </a>
                </li>
                <li className="socilas-item">
                    <a href="" className="socials-link">
                        <img src={telegram} alt="" className="socials-image"/>
                    </a>
                </li>
            </ul>);
}
 
export default Socials;