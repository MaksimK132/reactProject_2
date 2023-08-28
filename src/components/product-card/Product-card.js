import "./product-card.css"

import rosy_delight from "./../../img/rosy-delight.png"

const Product_card = () => {
    return (
        <>
            <div class="product-card">
                <div class="product-card-grid">
                    <div class="product-card-demo product-card-picture">
                        <img src={rosy_delight} alt="" class="product-card-image"/>
                    </div>
                    <div class="product-card-demo-right product-card-inner">
                        <div class="product-info">
                            <p class="product-c ategory">FRESH FLOWERS</p>
                            <p class="product-card-name">/ROSY DELIGHT</p>
                        </div>
                        <p class="product-name-price">Rosy Delight - $100</p>
                        <p class="product-text">Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and
                            subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even
                        </p>
                        <div class="quantity-clicker"></div>
                        <div class="product-carousel-block">
                            <div class="carousel-top">
                                <p class="carousel-tittle">Excellent Combination with:</p>
                                <p class="vase">Vase Not Included</p>
                            </div>
                            <div class="carousel-bottom">

                            </div>
                        </div>
                        <div class="options-block">
                            <p class="options-tittle">Price options</p>
                            <div class="options-click-block">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Product_card;