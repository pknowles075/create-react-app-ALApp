import "./FlashCards.css"
import React, {useState} from 'react';

function fCF(){
    var lEng=["White","Yellow","Blue"];
    var lAra=["Abyad","Asfar","Azraq"];
    let c=Math.floor(Math.random()*lEng.length)
    var combine =lEng[c]+" "+lAra[c];
    return combine;
}
export const FlashCards = () => {
    const [count, setCount]=useState(fCF);
    return (
        <div className="main">
            <div id="flashCard">
                <div id="x" onClick={()=> setCount(fCF())}>{count}</div>

            </div>
            
        </div>
    )


}
export default FlashCards;
