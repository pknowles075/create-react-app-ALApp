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



const  mydiv = document.createElement("DIV");
mydiv.setAttribute("id","wrongId");


function ShowWrong(){
    mydiv.innerHTML = "Wrong";                   
    document.body.appendChild(mydiv);
}

function RemoveWrong(){
    
    document.body.removeChild(mydiv);

}

function ShowCorrect(){
 mydiv.innerHTML = "Correct";  
 mydiv.setAttribute("id","correctId");
 document.body.appendChild(mydiv);
}
    var CHOOSEN_TEXT = Arabic_Text[selected];
    var CHOOSEN_TEXT_Eng = Eng_Text[selected];


    const [value, setValue] = useState("");
    let CORRECT = false;
  
   function runner(event){
    if(event.key === 'Enter'){
        console.log('enter press here! ')
        Score();
        rollIt();
    }
    else{}
   }
    function Score() {
        console.log("score was running")
        let CORRECT = false;
        setValue('');
       
          
          
        if (CHOOSEN_TEXT_Eng === username) {
            currentScore =currentScore+ 100;
            CORRECT = true;
            setScore(currentScore);
            ShowCorrect();
            setTimeout(RemoveWrong,1000)

        }
        else{
            ShowWrong();
            setTimeout(RemoveWrong,1000)

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

        const input = <input id="inputBox"value={value}  onKeyPress={runner} autoFocus="autoFocus" onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

    var [username, userInput] = useInput({ type: "text" });
  
    const p=<p>
            Your Translate {username} Correct Translate {CHOOSEN_TEXT_Eng} 
            Your {CORRECT} Your score is: {currentScore}</p>
    return (
        <>
        <div id="correct">Correct</div>
        <div id="arabicText"><p>{CHOOSEN_TEXT}</p></div>
        {username}<br></br>
            {userInput}<br></br>
            <button  onClick={() => {Score(); rollIt();}}  id="thisButton"><p>Reload</p></button>

            <div id="titleDiv"><h5>Result</h5><p> {currentScore} CTP</p><h6>{CHOOSEN_TEXT_Eng }<br></br>id: {selected}</h6>
</div><br></br>
     

           
            
        </>
    )
}

export default Game;
