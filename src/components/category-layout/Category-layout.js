import "./category-layout.css";
import Category_product_item from "../category-product-item/Category-product-item";
import {categoryProductItem} from "./../../utils/categoryProductList"
import { useParams } from "react-router-dom";
import {homeHeaderProductItems} from "./../../utils/homeHeaderProductList"


const Category_layout = () => {
    const  {id} = useParams()
    const categoryInfo = homeHeaderProductItems[id];
    
    return (
        <>
            <div className="category-block">
                <div className="category-grid">
                    <div style={{backgroundImage: `url(${categoryInfo.bigImage})`}} className="category-demo hero-image">
                        <p className="category-hero-tittle">{categoryInfo.categoryName}</p>
                    </div>
                    {categoryProductItem.map((item) => {
                                        return <Category_product_item  productImage={item.productImage} productName={item.productName} productPrice={item.productPrice} className={item.className} />;
                                    })}
                    <div className="category-demo category-null"></div>
                </div>
            </div>
        </>
    );
}
 
export default Category_layout;