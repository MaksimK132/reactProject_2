import "./our-qualities-block.css";

import quality_image_1 from "./../../img/quality-image-1.png"
import quality_image_2 from "./../../img/quality-image-2.png"
import quality_image_3 from "./../../img/quality-image-3.png"

const Our_qualitites_block = () => {
    return (
        <>
            <div className="our-qualities-block">
                <div className="our-qualities-grid">
                    <div className="our-qualities-demo quality-picture-1 border-2">
                        <img src={quality_image_1} alt="" className="quality-image-1"/>
                    </div>
                    <div className="our-qualities-demo-right quality-inner-1">
                        <p className="quality-tittle">Expertly Crafted Bouquets</p>
                        <p className="quality-text">At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully
                            select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly
                            with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.
                        </p>
                    </div>
                    <div className="our-qualities-demo quality-inner-2 border">
                        <p className="quality-tittle">Bouquets, Gifts & Ambiance</p>
                        <p className="quality-text">In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants,
                            and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and
                            gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.
                        </p> 
                    </div>
                    <div className="our-qualities-demo-right quality-picture-2">
                        <img src={quality_image_2} alt="" className="quality-image-2"/>
                    </div>
                    <div className="our-qualities-demo quality-picture-3 border-2">
                        <img src={quality_image_3} alt="" className="quality-image-3"/>
                    </div>
                    <div className="our-qualities-demo-right quality-inner-3">
                        <p className="quality-tittle">Making Every Day Special</p>
                        <p className="quality-text">Our mission is simple: to make every day special and memorable for our customers. We are dedicated
                            to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make
                            you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to
                            bringing joy and happiness to your life with our beautiful bouquets and gifts.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Our_qualitites_block;