import React from 'react'
import "./Game.css";
import { useState } from 'react';


var  Random_Quote_Num=Math.floor(Math.random()*2);

const Game = () => {
    const [selected, setSelected] = useState(Random_Quote_Num)

    function rollIt(){
        const Random_Quote_Num = Math.floor(Math.random() * 2);
        setSelected(Random_Quote_Num);   
     }
    const Arabic_Text=
    ["أنا أحب القطط","للبيت",];
   
   
    const Eng_Text=
    ["I love cat","I go home"];



   



   


var CHOOSEN_TEXT=Arabic_Text[selected];
var CHOOSEN_TEXT_Eng=Eng_Text[selected];

    var score=0;
    function Score(){
        
        let CORRECT=false;
        if(CHOOSEN_TEXT_Eng===username){
            score+=1000;
            CORRECT=true;
        }
        alert(
            "Your trans "+
            username+"\nCorrect trans "+CHOOSEN_TEXT_Eng+
            "\nYour "+CORRECT+"\nYour score is:"+score);
        Random_Quote_Num=Math.floor(Math.random()*2);
    }

    function useInput({ type /*...*/ }) {
        
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
      }

    const [username, userInput] = useInput({ type: "text" });
    return (
        <>
        <div>Translate this</div><br></br>
        <div>"id:"{selected}</div>
        <div id="arabicText"><p>{CHOOSEN_TEXT}</p></div>
        {username}<br></br>
        {userInput}   <br />
        <button onClick={Score} >Done!</button>
        <button onClick={rollIt} >New!</button>

    </>
    )
}

export default Game;
