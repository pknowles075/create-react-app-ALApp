import "./FlashCards.css"
import React   from 'react';
import  ColorText from "./ColorText";
import Gt from "./Gt";
import FoodText from "./FoodText";
import { useState } from "react";

export const FlashCards = () => {
const[active, setActive]=useState("FinalCard")
    return (
        <>
        <div className="main">
          <h2 id="theTitle">CATEGORY ARCHIVES: LEARN ARABIC VOCABULARY</h2>
                    <div id="flashCard" >
                        <div id="flashCardText"onClick={()=>setActive("1Card")}><span role="img" aria-label="string">📅June 23,2021 </span>Animal</div>
                        <div id="flashCardText"onClick={()=>setActive("2Card")}><span role="img" aria-label="string">📅June 23,2021 </span>Food</div>
                        <div id="flashCardText"onClick={()=>setActive("3Card")}><span role="img" aria-label="string">📅June 23,2021</span> AC N1 – Grammar Vocab 1</div>

                    <br>
                    </br>
                  

                    </div>
                    {active ==="1Card" && <ColorText/>}
                    {active ==="2Card" && <FoodText/>}
                    {active ==="3Card" && <Gt/>}
                       
            </div>
            </>
            
    )


}
export default FlashCards;
