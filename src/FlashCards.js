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
          <h2 id="theTitle">CATEGORY ARCHIVES: LEARN ARABIC VOCABULARY</h2>
                    <div id="flashCard" >
                        <div id="flashCardText"onClick={()=>setActive("1Card")}><span role="img" aria-label="string">📅June 23,2021 Animal</span></div>
                        <div id="flashCardText"onClick={()=>setActive("2Card")}><span role="img" aria-label="string">📅June 23,2021 Food</span></div>

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
