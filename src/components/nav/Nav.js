import "./nav.css"

import menu_nav_image from "./../../img/Menu.svg"
import cart_nav_image from "./../../img/cart.svg"
import Nav_modal from "../nav-modal/Nav-modal";

import { useState } from "react";

const Nav = () => {
    const [modalButton, setModalButton] = useState(false);
    return (<nav className="nav">
                <div className="nav-grid">
                    <div className="nav-demo shop">
                        <a className="nav-link">Shop</a>
                    </div>
                    <div className="nav-demo contact">
                        <a className="nav-link">Contact</a>
                        <a onClick={() => setModalButton(true)} className="menu-nav-link">
                            <img src={menu_nav_image} className="menu-image"></img>
                        </a>
                    </div>
                    <div className="nav-demo nav-null"></div>
                    <div className="nav-demo sign-in border">
                        <a className="nav-link">Sign in</a>
                        <a className="cart-image-link">
                            <img src={cart_nav_image} className="cart-image"></img>
                        </a>
                    </div>
                    <div className="nav-demo-right cart">
                        <a className="nav-link">Cart</a>
                    </div>
                </div>
                <Nav_modal trigger={modalButton} setTrigger={setModalButton}>
                </Nav_modal>
            </nav>);
}
 
export default Nav;