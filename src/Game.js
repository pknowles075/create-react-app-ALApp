import React, { useState } from 'react';
import "./Game.css";



const Arabic_Text =
    ["ahib kalba","hubu qita","ana akil alluhum","alshaati harin jidana"];


    
const Eng_Text =
    ["I love dog", "love cat","I eat meat","beach is very hot"];

const OFFICAL_NUM = Arabic_Text.length;
var Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);

const Game = () => {
    var [currentScore, setScore] = useState(0)
    if(localStorage.getItem('myData')===null){
        localStorage.setItem('myData', currentScore);
        console.log("set")
        }
    const [selected, setSelected] = useState(Random_Quote_Num)

    function rollIt() {
        const Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);
        setSelected(Random_Quote_Num);
    }










    var CHOOSEN_TEXT = Arabic_Text[selected];
    var CHOOSEN_TEXT_Eng = Eng_Text[selected];


    const [value, setValue] = useState("");
    let CORRECT = false;

    function Score() {
        let CORRECT = false;
        setValue('');
        if (CHOOSEN_TEXT_Eng === username) {
            currentScore =currentScore+ 100;
            CORRECT = true;
            setScore(currentScore);
           
        }
        if(localStorage.getItem('myData')<currentScore){
            localStorage.setItem('myData', currentScore);
            console.log("updated Score:"+localStorage.getItem('myData'))

        }
        console.log("score was calc\n"+currentScore+CORRECT)
        
        Random_Quote_Num = Math.floor(Math.random() * 2)
        return setScore(currentScore);
    }

    function useInput({ type /*...*/ }) {

        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

    var [username, userInput] = useInput({ type: "text" });

    const p=<p>
            Your Translate {username} Correct Translate {CHOOSEN_TEXT_Eng} 
            Your {CORRECT} Your score is: {currentScore}</p>
    return (
        <>
            <div id="titleDiv"><p>Translate this your score is: {currentScore}</p></div><br></br>
    
            <div id="arabicText"><p>{CHOOSEN_TEXT}</p></div>
            <div id="hiddenCorrect"><p>[Dev_Tools:{CHOOSEN_TEXT_Eng}]</p></div>
            <div>id:{selected}</div>

            {username}<br></br>
            {userInput}   <br />
            <button onClick={() => {Score(); rollIt();}}  >Done!</button>
            <button onClick={rollIt} >New!</button>
            {p}
        </>
    )
}

export default Game;
