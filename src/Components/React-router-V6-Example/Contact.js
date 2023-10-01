import React from "react";
import { Link } from "react-router-dom";
import style from "../custum.module.css"
const Contact = ()=>{
    return(
        <div  className={style.pagesize}>
            <h2>Contact compo</h2>
            <li>   <Link to="/home" >  HOME  </Link> </li>
            <li>   <Link to="/about" >  ABOUT  </Link> </li>
          
        </div>
    )
}
export default Contact;