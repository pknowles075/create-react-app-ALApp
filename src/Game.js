    import React, { useState } from 'react';
    import "./Game.css";


    var CorrectCOUNTER=0;
    var WrongCOUNTER=0;
    const French_Text =
        ["chiens","damour","viande","plage","cinéma","je","l'eau",
    "vache","bibliothèque","arbre","porte","reine","loger"];
    
    const Arabic_Text =
        ["kalba","qita","lahm","shati bahr","aflam","ana","ma",
        "baqara","maktaba","shajara","bab","malaka","manzil"]


        
    const Eng_Text =
        ["dog", "cat","meat","beach","movies","I","water","cow"
    ,"libary","tree","door","queen","house"];

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
            case "Arabic":
                currentLang=Arabic_Text;
                break;
            case "French":
                currentLang=French_Text;
                break;
            default:
                currentLang=Arabic_Text;
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
        mydiv.innerHTML = "Wrong";                   
        document.body.appendChild(mydiv);
    }

    function RemoveWrong(){
        
        document.body.removeChild(mydiv);

    }

    function ShowCorrect(){
        CorrectCOUNTER++;

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

            if (CHOOSEN_TEXT_Eng === username) {
                currentScore =currentScore+ 100;
                CORRECT = true;
                setScore(currentScore);
                ShowCorrect();
                setTimeout(RemoveWrong,1000);
                let i=parseInt(currentXP);
                currentXP=i+Math.floor(Math.random()*10)+1;
                setXP(currentXP);
                localStorage.setItem('XP', currentXP);

            }
            else{
                ShowWrong();
                setTimeout(RemoveWrong,1000)

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

            const input = <input id="inputBox"value={value}  onKeyPress={runner} autoFocus="autoFocus" onChange={e => setValue(e.target.value)} type={type} />;
            return [value, input];
        }

        var [username, userInput] = useInput({ type: "text" });
    
        const p=<p>

                Your Translate {username} Correct Translate {CHOOSEN_TEXT_Eng} 
                Your {CORRECT} Your score is: {currentScore}</p>
        return (
            <>
            <div id="correct">Correct</div><br></br>
            <div onClick={()=>{localStorage.clear();}}>Save XP,Score,etc.</div>

            <select id="mySelected" placeholder="Lang" onChange={(val) => ChangeMode(val.target.value)}>
                 <option value="" >Select your Lang</option>
                <option value="Arabic">Arabic</option>
                <option value="French">French</option>

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
             {CHOOSEN_TEXT_Eng}
    </div><br></br>
        
            
                
            </>
        )
    }

    export default Game;
