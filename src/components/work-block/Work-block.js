import "./work-block.css";

const Work_block = () => {
    return (
        <>
            <div className="work-block">
                <div className="work-grid">
                    <div className="work-demo work-tittle border">
                        <p className="work-tittle-text">How does it work?</p>
                    </div>
                    <div className="work-demo-right choose-plan-block">
                        <p className="work-small-tittle">Choose a plan</p>
                        <p className="work-text">Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal,
                            and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe
                            plans also include a luxurious scented candle to enhance the ambiance.
                        </p>
                    </div>
                    <div className="work-demo-right frequency-block">
                        <p className="work-small-tittle">Frequency and Duration</p>
                        <p className="work-text">Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription
                            duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different
                            needs, and we aim to provide flexible subscription options that cater to your specific preferences.
                        </p>
                    </div>
                    <div className="work-demo-right pay-block">
                        <p className="work-small-tittle">Pay once</p>
                        <p className="work-text">After entering your contact and delivery information and paying for your subscription, you can sit
                            back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved
                            ones
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Work_block;