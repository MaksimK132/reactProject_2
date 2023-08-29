import Socials from "../socials/Socials";
import close_image from "./../../img/close-button-image.svg"

import "./nav-modal.css"

import { NavLink } from "react-router-dom";

const Nav_modal = (props) => {
    
    return (props.trigger) ? (<div className="modal">
                <div className="modal-container">
                    <div className="modal-inner">
                        <div className="nav-modal-grid">
                            <div className="nav-modal-demo nav-modal-close">
                                <a onClick={() => props.setTrigger(false)} className="modal-close-button">
                                    <img src={close_image} className="modal-close-button-image"/>
                                </a>
                            </div>
                            <div className="nav-modal-demo nav-modal-block-1">
                                <NavLink><p className="nav-modal-link">Sign In</p></NavLink>
                            </div>
                            <div className="nav-modal-demo nav-modal-block-2">
                                <NavLink><p className="nav-modal-link">Shop</p></NavLink>
                            </div>
                            <div className="nav-modal-demo nav-modal-block-3">
                                <NavLink><p className="nav-modal-link">Service</p></NavLink>
                            </div>
                            <div className="nav-modal-demo nav-modal-block-4">
                                <NavLink><p className="nav-modal-link">Contact</p></NavLink>
                            </div>
                            <div className="nav-modal-demo nav-modal-block-5">
                                <NavLink><p className="nav-modal-link">About Us</p></NavLink>
                            </div>
                            <div className="nav-modal-demo nav-modal-block-6">
                                <ul className="terms-list">
                                    <li className="terms-item">
                                        <a className="terms-link">Shipping & returns</a>
                                    </li>
                                    <li className="terms-item">
                                        <a className="terms-link">Terms & conditions</a>
                                    </li>
                                    <li className="terms-item">
                                        <a className="terms-link">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-modal-demo nav-modal-block-7">
                                <div className="modal-socials-content">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : "";
}
 
export default Nav_modal;