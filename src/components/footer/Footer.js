import Socials from "../socials/Socials";
import "./footer.css";

const Footer = () => {
    return (<footer className="footer">
                <div className="footer-grid">
                    <div className="footer-demo footer-email border-2">
                        <p className="footer-email-text">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day,
                            Christmas... Reminds you 7 days before. No spam or sharing your address
                        </p>
                        <input type="text" placeholder="Your Email" className="footer-email-input"/>
                        <button className="footer-email-button">Remind</button>
                    </div>
                    <div className="footer-demo footer-contact border">
                        <p className="footer-tittle">Contact Us</p>
                        <ul className="footer-contact-list">
                            <li className="footer-contact-item">
                                <p className="footer-contact-tittle">Address</p>
                                <p className="footer-contact-text">15/4 Khreshchatyk Street, Kyiv </p>
                            </li>
                            <li className="footer-contact-item">
                                <p className="footer-contact-tittle">Phone</p>
                                <p className="footer-contact-text">+380980099777</p>
                            </li>
                            <li className="footer-contact-item">
                                <p className="footer-contact-tittle">General Enquiry:</p>
                                <p className="footer-contact-text">Kiev.Florist.Studio@gmail.com</p>
                            </li>
                        </ul>
                        <p className="footer-tittle">Follow Us</p>
                        <Socials />
                    </div>
                    <div className="footer-demo footer-shop border-2">
                        <p className="footer-tittle">Shop</p>
                        <ul className="footer-shop-list">
                            <li className="footer-shop-item">
                                <a href="" className="footer-shop-link">All Products</a>
                            </li>
                            <li className="footer-shop-item">
                                <a href="" className="footer-shop-link">Fresh Flowers</a>
                            </li>
                            <li className="footer-shop-item">
                                <a href="" className="footer-shop-link">Dried Flowers</a>
                            </li>
                            <li className="footer-shop-item">
                                <a href="" className="footer-shop-link">Live Plants</a>
                            </li>
                            <li className="footer-shop-item">
                                <a href="" className="footer-shop-link">Designer Vases</a>
                            </li>
                            <li className="footer-shop-item">
                                <a href="" className="footer-shop-link">Aroma Candles</a>
                            </li>
                            <li className="footer-shop-item">
                                <a href="" className="footer-shop-link">Freshener Diffuser</a>
                            </li>
                        </ul>
                        <p className="footer-tittle">Service</p>
                        <ul className="footer-service-list">
                            <li className="footer-service-item">
                                <a href="" className="footer-service-link">Flower Subcription</a>
                            </li>
                            <li className="footer-service-item">
                                <a href="" className="footer-service-link">Wedding & Event Decor</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-demo-right footer-about">
                        <p className="footer-tittle">About Us</p>
                        <ul className="about-us-list">
                            <li className="about-us-item">
                                <a href="" className="about-us-link">Our story</a>
                            </li>
                            <li className="about-us-item">
                                <a href="" className="about-us-link">Blog</a>
                            </li>
                        </ul>
                        <ul className="terms-list">
                            <li className="terms-item">
                                <a href="" className="terms-link">Shipping & returns</a>
                            </li>
                            <li className="terms-item">
                                <a href="" className="terms-link">Terms & conditions</a>
                            </li>
                            <li className="terms-item">
                                <a href="" className="terms-link">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>);
}
 
export default Footer;