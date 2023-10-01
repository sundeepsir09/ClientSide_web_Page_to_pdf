import React from "react"
import { Link } from "react-router-dom";
import style from "../custum.module.css"
const Home = () => {
    return(
        <div className={style.pagesize}>
<h1>HOMe Compo</h1>
          
            <li>   <Link to="/about" >  ABOUT  </Link> </li>
            <li>   <Link to="/contact "> CONTACT   </Link> </li>
        </div>
    )
}
export default Home;