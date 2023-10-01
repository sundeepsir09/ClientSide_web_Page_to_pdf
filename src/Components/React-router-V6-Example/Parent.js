import React from "react"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Navbar from "./Navbar";
const Parent = () =>{
    console.log(Navigate);
    return(
        <div>
        
        {/* <ul>
            <li>   <Link to="home" >  HOME  </Link> </li>
            <li>   <Link to="about" >  ABOUT  </Link> </li>
            <li>   <Link to="contact "> CONTACT   </Link> </li>
        </ul> */}
            {/* <h1>Parent Compo</h1> */}
            <BrowserRouter>
            <Navbar />
                    <Routes>
                        <Route path="home" element={<Home />}></Route>
                        <Route path="about"  element={<AboutUs /> }></Route>
                        <Route path="contact" element={<Contact />}   ></Route>
                        {/* <Route path="*" element={<PageNotFound />}   ></Route> */}
                        <Route path="*" element={<Navigate to="/Parent" />}   ></Route>
                    </Routes>
            </BrowserRouter>
          


        </div>
    )
}
export default Parent;