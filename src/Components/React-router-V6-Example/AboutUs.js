import React from "react"
import { Link } from "react-router-dom";
import style from "../custum.module.css"
const AboutUs = ()=>{
    return(
        <div className={style.pagesize}>
            <h1>About compo</h1>
            <li>   <Link to="/home" >  HOME  </Link> </li>
            
            <li>   <Link to="/contact "> CONTACT   </Link> </li>
        </div>
    )
}
export default AboutUs;