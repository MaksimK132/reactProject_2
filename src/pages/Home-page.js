import Socials from "../components/socials/Socials";
import "./../styles/style.css"





import Home_header from "../components/home-header/Home-header";
import About_us_block from "../components/about-us-block/About-us-block";
import Choose_block from "../components/choose-block/Choose-block";
import Contact_us_block from "../components/contact-us-block/Contact-us-block";
import Our_service_block from "../components/our-service-block/Our-service-block";

const Home_page = () => {
    return (<main className="main">
                <Home_header />
                <About_us_block />
                <Choose_block />
                <Contact_us_block />
                <Our_service_block />
            </main>);
}
 
export default Home_page;