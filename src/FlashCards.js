import "./FlashCards.css"
import React  from 'react';

function animalF(){
  
    document.getElementById("info").innerText="[animal info here]"
}
function carF(){
  
    document.getElementById("info").innerText="[car info here]"
}
export const FlashCards = () => {

    return (
        <div className="main">
          
                    <div id="flashCard" >
                        <div id="flashCardText"onClick={animalF}><span role="img" aria-label="string">📅</span>June 22,2021 Animals</div>
                        <div id="flashCardText"onClick={carF}><span role="img" aria-label="string">📅</span>June 22,2021 Cars</div>
                   
                    <br>
                    </br>
                    <div id="info"></div>
                    </div>
            </div>
            
    )


}
export default FlashCards;
