import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Main from "../core/Main";
import Homepage from "../components/HomePage";
import ContactUsPage from "../shared/Components/Contactus";
import AboutUs from "../shared/Components/AboutUs ";
import Product from "../shared/Components/Products";
import { useEffect } from "react";

export default function Approuter () {

    // ScrollToTop Component
const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, [location.pathname]);
  
    return null;
  };
  
    return(
        <>
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>
                <Route element={<Main/>}>
                     <Route path="/" element={<Homepage />} />
                     <Route path="/contactus" element={<ContactUsPage />} />
                     <Route path="/aboutus" element={<AboutUs />} />
                     <Route path="/products/:productId" element={<Product />} />



                </Route>
            </Routes>
        
        </BrowserRouter>
        </>
    )
}