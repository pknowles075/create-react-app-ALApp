    import React, { useState } from 'react';
    import "./Game.css";


    var CorrectCOUNTER=0;
    var WrongCOUNTER=0;
    const Spaninsh_Text =
        ["solo sigue nadando","Enfocar Velocidad Yo soy velocidad","Que la fuerza esté con usted."
        ,"Me hablas","E.T teléfono de casa","¡Estoy caminando aquí!","Vuelvo enseguida","Yo decido cuando termino"
    ,"Escuche cinco, un diez está hablando"];
    
    const French_Text=["Continue de nager","Continuer de nager","Que la force soit avec toi"
        ,"Tu me parle","Et téléphone maison","Je marche ici !","Je reviendrai","Je décide quand j'ai fini",
    "Écoute cinq, un dix parle"];
        
    const Eng_Text =
        ["Just keep swimming","Focus Speed I am speed","May the Force be with you"
        ,"You talking to me","E.T phone home","I'm walking here!","I'll be back","I decide when I’m done"
        ,"Listen up fives, a ten is speaking"];

    const Game = () => {
       if(localStorage.getItem('XP')===null){
        localStorage.setItem('XP', 0);
        
        }
        var [currentLang, setLang] = useState(localStorage.getItem('currentLang'))
        var [currentXP, setXP] = useState(localStorage.getItem('XP'))
        
        if(localStorage.getItem('currentLang')===null){
            localStorage.setItem('currentLang', currentLang);
            
            }
           
        var [currentScore, setScore] = useState(0);
        if(localStorage.getItem('d')===null){
            localStorage.setItem('d', 0);
            }
        console.log(localStorage.getItem('d'));

        switch(currentLang){
            case "Spaninsh":
                currentLang=Spaninsh_Text;
                break;
            case "French":
                currentLang=French_Text;
                break;
                case "English":
                    currentLang=Eng_Text;
                    break;
            default:
                currentLang=Spaninsh_Text;
                break;
        }
        const OFFICAL_NUM = currentLang.length;
        var Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);
        


      
                
        const [selected, setSelected] = useState(Random_Quote_Num)

        function rollIt() {

            const Random_Quote_Num = Math.floor(Math.random() * OFFICAL_NUM);
            setSelected(Random_Quote_Num);
            
        }


    const  mydiv = document.createElement("DIV");
    mydiv.setAttribute("id","wrongId");


    function ShowWrong(){
        WrongCOUNTER++;
        mydiv.innerHTML = "Wrong the correct word was ["+CHOOSEN_TEXT_Eng+"]";                   
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
        var CHOOSEN_TEXT = currentLang[selected];
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
        
            
            CHOOSEN_TEXT_Eng= CHOOSEN_TEXT_Eng.toLowerCase();
            username=  username.toLowerCase();

            /* for(let i=0; i<username.length; i++){
                username[i]==CHOOSEN_TEXT_Eng[i];}*/









            if (CHOOSEN_TEXT_Eng === username) {
                currentScore =currentScore+ 100;
                CORRECT = true;
                setScore(currentScore);
                ShowCorrect();
                setTimeout(RemoveWrong,4000);
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
        function useInput({ type /*...*/ }) {

            const input = <input id="inputBox"value={value} placeholder='type the quote here!' onKeyPress={runner} autoFocus="autoFocus" onChange={e => setValue(e.target.value)} type={type} />;
            return [value, input];
        }
      
        var [username, userInput] = useInput({ type: "text" });
    
        const p=<p>

                Your Translate {username} Correct Translate {CHOOSEN_TEXT_Eng} 
                Your {CORRECT} Your score is: {currentScore}</p>
        return (
            <>
            <div>
                <a href="https://discord.gg/nvQ4qP5J">Link for our Discord for suggestions,comments or ideas (:</a>
                </div>
            <div id="correct">Correct</div>
            <select id="mySelected" placeholder="Lang" onChange={(val) => ChangeMode(val.target.value)}>
                 <option value="" >Select your Lang</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="English">English</option>

            </select>
            <div id="xpShow">Your Level is: {currentXP}</div>
            <div id="arabicText"><p>{CHOOSEN_TEXT}</p></div>
            
            <div class="mainBox"> {userInput}

                <button  onClick={() => {Score(); rollIt();}}  id="thisButton"><p>Reload</p></button><br></br>
                <p id="username">{username}</p><br></br></div>
                <br></br>
                <div id="titleDiv">
                    <p>Result</p>
                    <p> {currentScore} CTP</p>

                <div id="mainBoxArea">
                <p id="textP">Wrong</p>
                <div id="counterW">{WrongCOUNTER}</div>
                <br></br>
                <p id="textP">Correct</p>
                <div id="counterC">{CorrectCOUNTER}</div>
                </div> 
             
             <div onClick={()=>{localStorage.clear();}}>Reload XP,Score,etc.</div>

    </div><br></br>
        
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
