import "./../styles/style.css"


import faq_arrow_up from "./../img/faq-arrow-up.png"
import faq_arrow_down from "./../img/faq-arrow-down.png"
import Subscription_header from "../components/subscription-header/Subscription-header"
import Work_block from "../components/work-block/Work-block"
import Plan_block from "../components/plan-block/Plan-block"
import Faq_block from "../components/faq-block/Faq-block"

const Subscription_page = () => {
    return (
        <>
        <Subscription_header />
        <Work_block />
        <Plan_block />
        <Faq_block />
        </>
    );
}
 
export default Subscription_page;