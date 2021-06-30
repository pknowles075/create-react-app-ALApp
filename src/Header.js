    import React,{useState} from 'react'
    import "./HeaderStyle.css"

/*import Grammer from './Grammer';
import FlashCards from './FlashCards';
import Voacb  from './Voacb';
import LinkInfo from './LinkInfo';
import HomePage from './HomePage';*/
import Game from './Game';
import LeaderBoardMain from './LeaderBoardMain';
export const Header = () => {
    const[active, setActive]=useState("FinalCard")


    return (
        <>
             <div className="Header">
                 <div id="title">Lang.Cloud</div>
                        
                 <div id="divItems"onClick={()=>setActive("0Card")}>Game</div>

                        <div id="divItems"onClick={()=>setActive("1Card")}>LeaderBoard</div>
                        <Game/>
                   {active ==="5Card" && <Game/>}
                    {active ==="6Card" && <LeaderBoardMain/>}
 
      </div>
      </>
    )


}
export default Header;
