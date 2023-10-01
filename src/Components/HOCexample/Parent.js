import React from "react";
import HOCred from "./HOCred";
import HOCyellow from "./HOCyellow"
import HOCgreen from "./HOCgreen"
import Counter from "./Counter";
import style from "../custum.module.css"

const Parent = ()=>{

    return(
        <div className={style.Parent}>
        <h1>ParentCompo</h1>
        <HOCred  PropsCompo={Counter}    />
        <HOCyellow PropsCompo={Counter}   />
        <HOCgreen PropsCompo={Counter}   />

        </div>
    )

}
export default Parent;