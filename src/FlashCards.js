import "./FlashCards.css"
import React   from 'react';
import  ColorText from "./ColorText" 
import { useState } from "react";

export const FlashCards = () => {
    const [ShowCard,setShowCard]=useState(false);

    return (
        <>
        <div className="main">
          <div id="flTitle">CATEGORY ARCHIVES: LEARN ARABIC VOCABULARY</div>
                    <div id="flashCard" >
                        <div id="flashCardText"onClick={()=>setShowCard(!ShowCard)}><span role="img" aria-label="string">📅</span>June 22,2021 Animals</div>
                        <div id="flashCardText"onClick={()=>setShowCard(!ShowCard)}><span role="img" aria-label="string">📅</span>June 22,2021 Animals</div>

                    <br>
                    </br>

                    </div>
                    <div id="info">{ShowCard  &&<ColorText/>}</div>
          
            </div>
            </>
            
    )


}
export default FlashCards;
