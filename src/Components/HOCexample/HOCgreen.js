import React from "react"
import style from "../custum.module.css"
const HOCgreen = ({PropsCompo}) =>{
    return(
        <div className={style.HOCgreen}>
            <h3>HOCgreen compo</h3>
            <PropsCompo  />
        </div>
    )
}
export default HOCgreen