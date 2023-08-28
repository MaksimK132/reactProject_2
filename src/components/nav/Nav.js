import "./nav.css"

import menu_nav_image from "./../../img/Menu.svg"
import cart_nav_image from "./../../img/cart.svg"

const Nav = () => {
    return (<nav className="nav">
                <div className="nav-grid">
                    <div className="nav-demo shop">
                        <a className="nav-link">Shop</a>
                    </div>
                    <div className="nav-demo contact">
                        <a className="nav-link">Contact</a>
                        <img src={menu_nav_image} className="menu-image"></img>
                    </div>
                    <div className="nav-demo nav-null"></div>
                    <div className="nav-demo sign-in border">
                        <a className="nav-link">Sign in</a>
                        <img src={cart_nav_image} className="cart-image"></img>
                    </div>
                    <div className="nav-demo-right cart">
                        <a className="nav-link">Cart</a>
                    </div>
                </div>
            </nav>);
}
 
export default Nav;