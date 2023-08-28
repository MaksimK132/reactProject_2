import "./../styles/style.css"



import About_header from "../components/about-header/About-header"
import Passion_block from "../components/passion-block/Passion-block"
import Our_qualitites_block from "../components/our-qualities-block/Our-qualities-block";
import Discover_block from "../components/discover-block/Discover-block";

const About_us_page = () => {
    return (
        <>
            <About_header />
            <Passion_block />
            <Our_qualitites_block />
            <Discover_block />
        </>
    );
}
 
export default About_us_page;