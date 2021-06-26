    import React,{useState} from 'react'
    import FlashCards from './FlashCards';
    import "./HeaderStyle.css"
import Grammer from './Grammer';
import Voacb  from './Voacb';
import LinkInfo from './LinkInfo';
import HomePage from './HomePage';
import Game from './Game';
export const Header = () => {
    const[active, setActive]=useState("FinalCard")


    return (
        <>
             <div className="Header">
                 <div id="title">Arabic.Cloud</div>
                 <div id="divItems"onClick={()=>setActive("0Card")}>Home</div>
                        
                        <div id="divItems"onClick={()=>setActive("1Card")}>FlashCards</div>
                        <div id="divItems"onClick={()=>setActive("2Card")}>Grammer</div>
                        <div id="divItems"onClick={()=>setActive("3Card")}>Voacb</div>
                        <div id="divItems"onClick={()=>setActive("4Card")}>Link</div>
                        <div id="divItems"onClick={()=>setActive("5Card")}>Game</div>

                    {active ==="0Card" && <HomePage/>}
                    {active ==="1Card" && <FlashCards/>}
                    {active ==="2Card" && <Grammer/>}
                    {active ==="3Card" && <Voacb/>}
                    {active ==="4Card" && <LinkInfo/>}
                    {active ==="5Card" && <Game/>}

      </div>
      </>
    )


}
export default Header;
