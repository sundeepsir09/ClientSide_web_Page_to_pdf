import React from 'react'
import { Link } from 'react-router-dom'
import style from "../custum.module.css"

const Navbar = () => {
  return (
    <div className={style.Navigation}>
    <ul> 
    <li>   <Link to="/home" >  HOME  </Link> </li>
    <li>   <Link to="/about" >  ABOUT  </Link> </li>     
    <li>   <Link to="/contact "> CONTACT   </Link> </li>
    <li>   <Link to="/uknown "> uknown  </Link> </li>
    </ul>
    </div>
  )
}

export default Navbar