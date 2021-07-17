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
var counter=0;


    
const Eng_Text =eng;

        
const Game = () => {
 
    const [style, setStyle] = useState({display: 'none'});
    const [styleBar, setStyleBar] = useState({width:"1%"});
    var [cLevel, setLevel] = useState(localStorage.getItem('currentLevel'));
   
    
  
       
    if(styleBar.width==="100%"){
        alert("You just did 10 cards right!:) level up!")
        setStyleBar({width:"0%"});
        cLevel++;
        setLevel(cLevel);
        localStorage.setItem('currentLevel', cLevel);

    }
    else{

    }
    const [toggleStyle, settoggleStyle] = useState(false);
    
    if(style.display==="inline-block"){
        document.body.style.opacity=.8;
    }
    else{
        document.body.style.opacity=1;

    }

    var [currentLang, setLang] = useState(localStorage.getItem('currentLang'))
    if(localStorage.getItem('currentLang')===null){

        currentLang="spanish";
    }
    var [currentTheme, setTheme] = useState(true)
    const toggleTrueFalse = () => {
        setTheme(!currentTheme) 
        switch(currentTheme){
        
            case true:
                document.body.style.backgroundColor="black";
                document.getElementById("titleDiv").style.outline="1px solid white";
                break;
            default:
                document.body.style.backgroundColor="#111927";
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
            currentLang=german;
            console.log("default lang first load or error")
            break;
            
    }
    var x=JSON.stringify(currentLang);
    var y=JSON.parse(x);
    

   if(localStorage.getItem('XP')===null){
    localStorage.setItem('XP', 0);
    
    }
    var [currentXP, setXP] = useState(localStorage.getItem('XP'))
    
    var [currentMode, setMode] = useState(localStorage.getItem('currentMode'))
    

    if(localStorage.getItem('currentLang')===null){
        localStorage.setItem('currentLang', "german");
        
        }
       
    var [currentScore, setScore] = useState(0);
    if(localStorage.getItem('d')===null){
        localStorage.setItem('d', 0);
        }
    console.log(localStorage.getItem('d'));



    
    const OFFICAL_NUM = y["length"];
   

    var Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);
    
            
    const [selected, setSelected] = useState(Random_Quote_Num)
    console.log(selected)

    var currentQuote = y[selected]["quote"];

    var CurrentAnswer = y[selected]["answer"];

    var CurrentWordnotDiv=y[selected]["word"]

    var CurrentWord = <div style={{fontFamily:"monospace",color:"lime",fontWeight:"light",fontSize:"30px",display:"inline-block",textDecoration:"underline"}}>{CurrentWordnotDiv}</div>;

    var list=["door","soda","drink","beer","salad","football","computer"];
    //list = list.filter(list => list.includes(!CurrentAnswer));

    list = list.sort(() => 0.5 - selected);
    console.log(list)
    var OneValue=list[0];
    var TwoValue=list[1];
    var ThreeValue=list[2];
    var FourValue=list[list.length-1];
   
        switch(selected){
            case 0:
                OneValue=CurrentAnswer;
                break;
            case 1:
                OneValue=CurrentAnswer;
                break;
            case 2:
                TwoValue=CurrentAnswer;
                break;
            case 3:
                ThreeValue=CurrentAnswer;
                break;
            case 4:
                FourValue=CurrentAnswer;
                break;
            default:
                FourValue=CurrentAnswer;
                break;
            
        }
    function rollIt() {

        const Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);
        setSelected(Random_Quote_Num);

        
    }


const  mydiv = document.createElement("DIV");
const myp = document.createElement("p");
mydiv.setAttribute("id","wrongId");
myp.setAttribute("id","wrongIdp");


function ShowWrong(){
    WrongCOUNTER++;
    myp.innerText = "Wrong the correct Word was "+CurrentAnswer.toUpperCase();      
    mydiv.appendChild(myp);             
    document.body.appendChild(mydiv);
}

function RemoveWrong(){
    
    document.body.removeChild(mydiv);

}
if(localStorage.getItem('currentMode')===null){

    localStorage.setItem('currentMode', "quote");
    
    }
function ShowCorrect(){

    CorrectCOUNTER++;
    counter=counter+10;
    setStyleBar({width:+counter+"%"});
 
    mydiv.setAttribute("id","correctId");

  
    CorrectCOUNTER++;
    myp.innerText = "Correct!";      
    mydiv.appendChild(myp);             
    document.body.appendChild(mydiv);
}
    var CHOOSEN_TEXT_Eng;
        var CHOOSEN_TEXT="";

        
    if(currentMode==="word"){
         CHOOSEN_TEXT = "";
        console.log("word")
        localStorage.setItem('currentMode', "word");
    }
    else{
        CHOOSEN_TEXT = currentQuote;
        console.log("quote")
        localStorage.setItem('currentMode', "quote");
    }   
    if(currentMode==="quote"){
        CHOOSEN_TEXT = currentQuote;
        console.log("quote")
        localStorage.setItem('currentMode', "quote");

    }
 
   
   

    const [value, setValue] = useState("");
    let CORRECT = false;

function runner(event){
    console.log(event.key)
    switch(event.key){

    case "Enter":
        console.log('enter press here! ')
        Score();
        rollIt();
        break;
    case "Escape":
        console.log('enter alert here! ')
        switch(toggleStyle){
        case false:
            setStyle({fontFamily:"monospace",fontSize:"20px",
            zIndex:"2", display:"inline-block",position:"absolute", backgroundColor: "gray",width:"50%",height:"70%",left:"25%" ,top:"20%"});
            settoggleStyle(true);
            break;
         case true:
            setStyle({display:"none"});
            settoggleStyle(false);
            break;
        default:
            break;
        }
        break;
    default:
         break;
    }
    

}
    function Score(g) {
        var OfficalUsername=username;

        if((g!==  undefined)){
            
            OfficalUsername=g.toLowerCase();
            
        }
        
        console.log("score was running")
        let CORRECT = false;
        setValue('');
    
        
        username=  username.toLowerCase();

        /* for(let i=0; i<username.length; i++){
            username[i]==CHOOSEN_TEXT_Eng[i];}*/








            try{

            OfficalUsername=OfficalUsername.toLowerCase();}
            catch(e){

            }
        if (CurrentAnswer === OfficalUsername) {
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
        currentMode=sel;
        return setMode(sel);
        


    }
    
    function useInput({ type /*...*/ }) {

        const input = <input id="inputBox"value={value} placeholder='...' autoComplete="off" onKeyDown={runner} autoFocus="autoFocus" onChange={e => setValue(e.target.value)} type={type} />;
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
        <option value=""disabled >Gamemode</option>

            <option value="word">Word</option>
            <option value="quote">Quote</option>

        </select>
        <select id="mySelected" placeholder="Lang" onChange={(val) => ChangeMode(val.target.value)}>
             <option value="" disabled>Select your Lang</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="portugese">Portugese</option>
            <option value="german">German</option>

        </select>        
        <div className="MainItems">
       
  

        <button id="toggler" onClick={toggleTrueFalse}>Theme</button>
        <div id="ShowInfo"style={style}>
            <p style={{float:"left" ,fontSize:"30px",color:"black",marginLeft:"10px"}}>About</p><br></br><p>Lang Cloud is a free website to practice Language Vocab! You can choose from many Langauges German 
            Spanish French etc. You get a random Quote and from there you are given a random word from the Quote. And if you translate the choosen 
            word you get it right! :) Have fun</p></div>

       
        </div>
        <div id="myProgress"></div>
        <div id="myBar" style={styleBar}></div>
        <div className="UserArea">

        <div style={{fontSize:"30px", fontWeight:"900"}}>Level {cLevel}</div>
        <div id="titleDiv">

            <div id="mainBoxArea">
            <p id="textP">Wrong</p>
            <div id="counterW">{WrongCOUNTER}</div>
            <p id="textP">Correct</p>
            <div id="counterC">{CorrectCOUNTER}</div>

         

</div>
</div> 

        <div id="showQuoteBox"><ul>Random<p id="currentLang">{localStorage.getItem("currentMode")}</p>in<p id="currentLang">{localStorage.getItem('currentLang')}</p></ul> </div>
        <div id="arabicText" ><p id="currentChoice">{CHOOSEN_TEXT}<br></br>{CurrentWord}</p>
</div>
        
        <div id="mainBox"> {userInput}

            <button  onClick={() => {Score(); rollIt();}}  id="thisButton"></button><br></br>
            <p id="username">{username}</p><br></br></div>
      <div id="WordChoiceBox">
          <div id="item" onClick={()=>{Score(OneValue); rollIt();}}><p>{OneValue}</p></div>
          <div id="item" onClick={()=>{Score(TwoValue);rollIt();}}><p>{TwoValue}</p></div>
          <div id="item" onClick={()=>{Score(ThreeValue);rollIt();}}><p>{ThreeValue}</p></div>
          <div id="item" onClick={()=>{Score(FourValue);rollIt();}}><p>{FourValue}</p></div>


      </div>

      </div>
<div id="AllQuotes">
    <p id="quotesP" >{Eng_Text}
    </p>
</div>
            
        </div>
        </>
    )
}

export default Game;
