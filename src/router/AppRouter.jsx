import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main";
import Homepage from "../components/HomePage";
import ContactUsPage from "../shared/Components/Contactus";
import AboutUs from "../shared/Components/AboutUs ";
import Product from "../shared/Components/Products";

export default function Approuter () {
    return(
        <>
        <BrowserRouter>
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