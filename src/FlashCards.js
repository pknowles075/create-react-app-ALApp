import "./FlashCards.css"
import React, {useState} from 'react';

function fCF(any){
    var lEng=["White","Yellow","Blue"];
    var lAra=["Abyad","Asfar","Azraq"];
    let c=Math.floor(Math.random()*lEng.length)
    var combine;
    if(any===0){
         combine = lAra[c];
    }
    if(any===1){
         combine =lEng[c];
    }
    
    return combine;
}
export const FlashCards = () => {
    const [count, setCount]=useState(fCF(1));
    return (
        <div className="main">
            <div id="flashCard">
                <div id="x" onClick={()=> setCount(fCF(0))}>{count}</div>
                <div id="nextButton" onClick={()=> setCount(fCF(1))}>Next</div>
            </div>
            
        </div>
    )


}
export default FlashCards;
