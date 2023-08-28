import "./styles/style.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop"

import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Home_page from "./pages/Home-page"
import Category_page from "./pages/Category-page";
import Subscription_page from "./pages/Subscribtion-page";
import About_us_page from "./pages/About-us-page";
import Product_page from "./pages/Product-page";


function App() {
  return (
    <div className="App">
        <link rel="stylesheet" href="./css/style.css"/>
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold?styles=20876,20877,20878,20879,20880" rel="stylesheet"></link>
        <div className="container">
            <Router>
                <ScrollToTop />
                <Nav />
                <Routes >
                    <Route path="/" element={<Home_page />}/>
                    <Route path="/category-page/:id" element={<Category_page />}/>
                    <Route path="/product-page" element={<Product_page />}/>
                    <Route path="/subscription-page" element={<Subscription_page />}/>
                    <Route path="/about-us-page" element={<About_us_page />}/>
                </Routes>
                <Footer />
            </Router>
        </div>         
    </div>
  );
}

export default App;
