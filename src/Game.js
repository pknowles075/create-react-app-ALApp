    import React, { useState } from 'react';
    import "./Game.css";



    const French_Text =
        ["Jaime les chiens","chat damour","je mange de la viande","la plage est tres chaude","je bois du pepsi","au cinéma"];
    const Arabic_Text =
        ["ahib kalba","hubu qita","ana akil alluhum","alshaati harin jidana","ana ashrab albibsi","ala alsiynama"];


        
    const Eng_Text =
        ["I love dog", "love cat","I eat meat","beach is very hot","I drink pepsi","to the movies"];



    const Game = () => {
        var [currentLang, setLang] = useState(localStorage.getItem('currentLang'))

        if(localStorage.getItem('currentLang')===null){
            localStorage.setItem('currentLang', currentLang);
            
            }
        
        var [currentScore, setScore] = useState(0);
        if(localStorage.getItem('d')===null){
            localStorage.setItem('d', 0);
            alert("set");
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
                setTimeout(RemoveWrong,1000)

            }
            else{
                ShowWrong();
                setTimeout(RemoveWrong,1000)

            }
            if(localStorage.getItem('d')<currentScore){
                localStorage.setItem('d', currentScore);
                alert("updated Score:"+localStorage.getItem('d'))

            }
            console.log("score was calc\n"+currentScore+CORRECT)
            
            Random_Quote_Num = Math.floor(Math.random() * 2)
            return setScore(currentScore);
        }
        
        function ChangeMode(sel){
            localStorage.setItem('currentLang', sel);
            alert(localStorage.getItem('currentLang'))
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
            <div id="correct">Correct</div>
            <select id="mySelected" placeholder="Lang" onChange={(val) => ChangeMode(val.target.value)}>
                 <option value="">Select your option</option>
                <option value="Arabic">Arabic</option>
                <option value="French">French</option>
            </select>
            <div id="arabicText"><p>{CHOOSEN_TEXT}</p></div>
            {username}<br></br>
                {userInput}<br></br>
                <button  onClick={() => {Score(); rollIt();}}  id="thisButton"><p>Reload</p></button>

                <div id="titleDiv"><h5>Result</h5><p> {currentScore} CTP</p><h6>{CHOOSEN_TEXT_Eng }<br></br><p></p>id: {selected}</h6>
    </div><br></br>
        

            
                
            </>
        )
    }

    export default Game;
