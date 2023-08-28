import "./our-service-block.css";



import Subscribe_block from "../subscribe-block/Subscribe-block";
import Wedding_block from "../wedding-block/Wedding-block";
import Clients_say_block from "../clients-say-block/Clients-say-block";

const Our_service_block = () => {
    return (<div className="our-service-block">
                <div className="our-service-grid">
                    <div className="our-service-demo-right our-service-tittle">
                        <p className="service-tittle-text">Our Service</p>
                    </div>
                    <Subscribe_block />
                    <Wedding_block />
                    <Clients_say_block />
                </div>
            </div>);
}
 
export default Our_service_block;