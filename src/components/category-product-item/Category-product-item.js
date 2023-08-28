import "./../../styles/style.css";

import { useParams } from "react-router-dom";
import { categoryProductItems2 } from "../../utils/categoryProductList2";

const Category_product_item = ({productImage, productName, productPrice, className}) => {

    const {id} = useParams();
    const productInfo = categoryProductItems2[id];
    console.log(productInfo[id])
    
    return (
        <>
                    <div style={{backgroundImage: `url(${productInfo[id].productImage})`}} className={className}>
                        <p className="category-product-name">{productInfo[id].productName}</p>
                        <p className="category-product-price">{productInfo[id].productPrice}</p>
                    </div>
        </>
    );
}
 
export default Category_product_item;