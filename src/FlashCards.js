import "./FlashCards.css"
import React   from 'react';
import  ColorText from "./ColorText";
import FoodText from "./FoodText";
import { useState } from "react";

export const FlashCards = () => {
const[active, setActive]=useState("FinalCard")
    return (
        <>
        <div className="main">
          <div id="flTitle">CATEGORY ARCHIVES: LEARN ARABIC VOCABULARY</div>
                    <div id="flashCard" >
                        <div id="flashCardText"onClick={()=>setActive("1Card")}>One<span role="img" aria-label="string">📅</span>June 22,2021 Animal</div>
                        <div id="flashCardText"onClick={()=>setActive("2Card")}>One<span role="img" aria-label="string">📅</span>June 22,2021 food</div>

                    <br>
                    </br>
                  

                    </div>
                    {active ==="1Card" && <ColorText/>}
                    {active ==="2Card" && <FoodText/>}
            </div>
            </>
            
    )


}
export default FlashCards;
