import React, { useState,/*useEffect*/ } from 'react';
import "./Game.css";
import {eng} from "./English.js"
//import axios from 'axios';
import german from "./german.json"
import spanish from "./Spanish.json"
import portugese from "./portuguese.json"
import french from "./french.json"
var CorrectCOUNTER=0;
var WrongCOUNTER=0;


const English_Words=[];

    
const Eng_Text =eng;

        
const Game = () => {
    if(localStorage.getItem('currentLang')===null){
        localStorage.setItem('currentLang',"spanish");
    }
    var [currentLang, setLang] = useState(localStorage.getItem('currentLang'))
   
    var [currentTheme, setTheme] = useState(true)
    const toggleTrueFalse = () => {
        setTheme(!currentTheme) 
        switch(currentTheme){
        
            case true:
                document.body.style.backgroundColor="black";
                document.getElementById("titleDiv").style.outline="1px solid white";
                break;
            default:
                document.body.style.backgroundColor="white";
                break;
            }
        };

   



    switch(currentLang){
        case "german":
            currentLang=german;
            break;
        case "spanish":
            currentLang=spanish;
            break;
        case "french":
            currentLang=french;
            break;
        case "portugese":
            currentLang=portugese;
            break;
        default:
            break;
            
    }
    var x=JSON.stringify(currentLang);
    var y=JSON.parse(x);
    

   if(localStorage.getItem('XP')===null){
    localStorage.setItem('XP', 0);
    
    }
    var [currentXP, setXP] = useState(localStorage.getItem('XP'))
    
    var [currentMode, setMode] = useState("quote")

    if(localStorage.getItem('currentLang')===null){
        localStorage.setItem('currentLang', currentLang);
        
        }
       
    var [currentScore, setScore] = useState(0);
    if(localStorage.getItem('d')===null){
        localStorage.setItem('d', 0);
        }
    console.log(localStorage.getItem('d'));



    
    const OFFICAL_NUM = 5;
   

    var Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);
    
            
    const [selected, setSelected] = useState(Random_Quote_Num)
    var currentQuote = y[selected]["quote"];

    
    var CurrentAnswer = y[selected]["answer"];






    function rollIt() {

        const Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);
        setSelected(Random_Quote_Num);

        
    }


const  mydiv = document.createElement("DIV");
mydiv.setAttribute("id","wrongId");


function ShowWrong(){
    WrongCOUNTER++;
    mydiv.innerHTML = "Wrong the correct Quote was ["+CurrentAnswer.toUpperCase()+"]";                   
    document.body.appendChild(mydiv);
}

function RemoveWrong(){
    
    document.body.removeChild(mydiv);

}

function ShowCorrect(){
    CorrectCOUNTER++;

    var  myTxt = document.createElement("DIV");
    myTxt.innerText=CHOOSEN_TEXT;
    myTxt.setAttribute("id","learnWordsmyTxt");

    document.getElementById("CorrectSave").appendChild(myTxt);

mydiv.innerHTML = "Correct";  
mydiv.setAttribute("id","correctId");
document.body.appendChild(mydiv);
}
    var CHOOSEN_TEXT_Eng;
    var CHOOSEN_TEXT = currentQuote;
    try{if(currentMode==="quote"){ CHOOSEN_TEXT_Eng = Eng_Text[selected].toLowerCase();
    }
    else{ CHOOSEN_TEXT_Eng = English_Words[selected].toLowerCase();
    }
}
catch(e){
    console.log('Error has happened');
    window.location.reload();
}


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
    
        
        username=  username.toLowerCase();

        /* for(let i=0; i<username.length; i++){
            username[i]==CHOOSEN_TEXT_Eng[i];}*/









        if (CurrentAnswer === username) {
            currentScore =currentScore+ 100;
            CORRECT = true;
            setScore(currentScore);
            ShowCorrect();
            setTimeout(RemoveWrong,2500);
            let i=parseInt(currentXP);
            currentXP=i+Math.floor(Math.random()*10)+1;
            setXP(currentXP);
            localStorage.setItem('XP', currentXP);

        }
        else{
            ShowWrong();
            setTimeout(RemoveWrong,3000)

        }
        if(localStorage.getItem('d')<currentScore){
            localStorage.setItem('d', currentScore);

        }
        console.log("score was calc\n"+currentScore+CORRECT)
        
        Random_Quote_Num = Math.floor(Math.random() * 2)
        return setScore(currentScore);
    }
    
    function ChangeMode(sel){
        rollIt();
        localStorage.setItem('currentLang', sel);
       
        return setLang(sel);
        
    }
    function ChangeModeDiff(sel){
        if(sel==="Gamemode"){
            
        }
        else{
            rollIt();
        return setMode(sel);
        }


    }
    function useInput({ type /*...*/ }) {

        const input = <input id="inputBox"value={value} placeholder='...' onKeyPress={runner} autoFocus="autoFocus" onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }
  
    var [username, userInput] = useInput({ type: "text" });

    const p=<p>

            Your Translate {username} Correct Translate {CHOOSEN_TEXT_Eng} 
            Your {CORRECT} Your score is: {currentScore}</p>
    return (
        <>
        <div id="links">
            
        <div id="correct">Correct</div><br></br>
        <select id="mySelected" placeholder="Lang" onChange={(val) => ChangeModeDiff(val.target.value)}>
        <option value="" >Gamemode</option>

            <option value="word">Word</option>
            <option value="quote">Quote</option>

        </select>
        <select id="mySelected" placeholder="Lang" onChange={(val) => ChangeMode(val.target.value)}>
             <option value="" >Select your Lang</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="english">English</option>
            <option value="portugese">Portugese</option>
            <option value="german">German</option>

        </select>
        </div>
        <button id="toggler" onClick={toggleTrueFalse}>Theme</button>

        <div id="titleDiv">

            <div id="mainBoxArea">
            <p id="textP">Wrong</p>
            <div id="counterW">{WrongCOUNTER}</div>
            <p id="textP">Correct</p>
            <div id="counterC">{CorrectCOUNTER}</div>

            </div> 
         

</div>
        <div id="showQuoteBox"><ul>Random<p id="currentLang">{currentMode}</p>in<p id="currentLang">{localStorage.getItem('currentLang')}</p></ul> </div>
        <div id="arabicText"><p>{CHOOSEN_TEXT}</p></div>
        
        <div className="mainBox"> {userInput}

            <button  onClick={() => {Score(); rollIt();}}  id="thisButton"><p>Reload</p></button><br></br>
            <p id="username">{username}</p><br></br></div>
            <br></br>
      <br></br>
    
<div id="learnWords">
    <p id="CorrectSave" >Quote list
    </p>
</div>
<div id="AllQuotes">
    <p id="quotesP" >{Eng_Text}
    </p>
</div>
            
        </>
    )
}

export default Game;
