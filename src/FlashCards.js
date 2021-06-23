import "./FlashCards.css"
import React  from 'react';

function animalF(){
  
    document.getElementById("info").innerText="[animal info here]"
}
export const FlashCards = () => {

    return (
        <div className="main">
            <div id="flashCard">
                    <div id="item" onClick={animalF}>June 22,2021 Animals
                    <br>
                    </br>
                    <a id="info">nothing</a>
                    </div>
            </div>
            
        </div>
    )


}
export default FlashCards;
