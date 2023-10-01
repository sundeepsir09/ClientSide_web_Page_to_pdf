import React from "react"
import style from "../custum.module.css"

 
const HOCred = ({PropsCompo}) =>{

    return(
        <div className={style.HOCred}>
            <h2> HOCred compo </h2>
            <PropsCompo  />
        </div>
    )
}
export default HOCred