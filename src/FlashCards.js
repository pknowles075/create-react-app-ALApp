import "./FlashCards.css"
import React  from 'react';

function animalF(){
  
    document.getElementById("info").innerText="[animal info here]"
}
export const FlashCards = () => {

    return (
        <div className="main">
          
                    <div id="flashCard" onClick={animalF}>
                        <div id="flashCardText"><span role="img" aria-label="string">📅</span>June 22,2021 Animals</div>
                    <br>
                    </br>
                    <div id="info"></div>
                    </div>
            </div>
            
    )


}
export default FlashCards;
