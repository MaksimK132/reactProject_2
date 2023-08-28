import "./home-header-product-item.css"

import { NavLink } from "react-router-dom";

const Home_header_product_item = ({categoryName, arrowImage, productImage, tittleClassName, imageClassName, shopClassName, index}) => {
    return (
        <>
                    <div className={tittleClassName}>
                        <p className="product-name">{categoryName}</p>
                        <div >
                            <NavLink to={`/category-page/${index}`} className={shopClassName}>
                                <p className="shop-now-text">Shop now</p>
                                <img src={arrowImage} alt="" className="shop-arrow"/>
                            </NavLink>
                        </div>
                    </div>
                    <div className={imageClassName}>
                        <img src={productImage} alt="" className="product-image"/>
                    </div>
        </>
    );
}
 
export default Home_header_product_item;