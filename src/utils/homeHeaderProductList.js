import arrow_right from "./../img/arrow-right.png"
import arrow_left from "./../img/arrow-left.png"
import product_1 from "./../img/product-1.png"
import product_2 from "./../img/product-2.png"
import product_3 from "./../img/product-3.png"
import product_4 from "./../img/product-4.png"
import product_5 from "./../img/product-5.png"
import big_product_1 from "./../img/fresh-flowers-image.png"
import big_product_2 from "./../img/dried-flowers-hero-image.png"
import big_product_3 from "./../img/live-plants-hero-image.png"
import big_product_4 from "./../img/aroma-candels-hero-image.png"
import big_product_5 from "./../img/fresheners-hero-image.png"

const homeHeaderProductItems = [
    {
        categoryName: "Fresh Flowers",
        arrowImage: arrow_right,
        productImage: product_1,
        tittleClassName: "home-header-demo product-tittle-1 product-inner border-2",
        imageClassName: "home-header-demo product-image-1 right border",
        shopClassName: "shop-now",
        bigImage: big_product_1
    },
    {
        categoryName: "Dried Flowers",
        arrowImage: arrow_left,
        productImage: product_2,
        tittleClassName: "home-header-demo-right product-tittle-2 product-inner",
        imageClassName: "home-header-demo product-image-2",
        shopClassName: "shop-now-reverse",
        bigImage: big_product_2
    },
    {
        categoryName: "Live plants",
        arrowImage: arrow_right,
        productImage: product_3,
        tittleClassName: "home-header-demo product-tittle-3 product-inner border-2",
        imageClassName: "home-header-demo right product-image-3 border",
        shopClassName: "shop-now",
        bigImage: big_product_3
    },
    {
        categoryName: "Aroma candels",
        arrowImage: arrow_left,
        productImage: product_4,
        tittleClassName: "home-header-demo-right product-tittle-4 product-inner",
        imageClassName: "home-header-demo product-image-4",
        shopClassName: "shop-now-reverse",
        bigImage: big_product_4
    },
    {
        categoryName: "Fresheners",
        arrowImage: arrow_right,
        productImage: product_5,
        tittleClassName: "home-header-demo product inner product-tittle-5 product-inner border-2",
        imageClassName: "home-header-demo right product-image-5 border",
        shopClassName: "shop-now",
        bigImage: big_product_5
    }
]

export {homeHeaderProductItems}