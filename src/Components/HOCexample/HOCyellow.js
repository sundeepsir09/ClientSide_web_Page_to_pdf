import React from "react";
import style from "../custum.module.css"

const HOCyellow =({PropsCompo} )=>{
    return(
        <div className={style.HOCyellow}>
            <h2>HOCyellow compo</h2>
            <PropsCompo />
        </div>
    )
}
export default HOCyellow