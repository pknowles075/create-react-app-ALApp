import "./FlashCards.css"
import React   from 'react';
import  ColorText from "./ColorText";
import FoodText from "./FoodText";
import { useState } from "react";

export const FlashCards = () => {
    const [ShowCard,setShowCard]=useState(false);
    const [ShowFood,setFood]=useState(false);

    return (
        <>
        <div className="main">
          <div id="flTitle">CATEGORY ARCHIVES: LEARN ARABIC VOCABULARY</div>
                    <div id="flashCard" >
                        <div id="flashCardText"onClick={()=>setShowCard(!ShowCard)}><span role="img" aria-label="string">📅</span>June 22,2021 Color</div>
                        <div id="flashCardText"onClick={()=>setFood(!ShowFood)}><span role="img" aria-label="string">📅</span>June 22,2021 Food</div>

                    <br>
                    </br>

                    </div>
                    <div id="info">{ShowCard  &&<ColorText/>}</div>
                    <div id="info">{ShowFood  &&<FoodText/>}</div>

            </div>
            </>
            
    )


}
export default FlashCards;
