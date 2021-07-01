    import React from 'react'
    import "./HeaderStyle.css"

/*import Grammer from './Grammer';
import FlashCards from './FlashCards';
import Voacb  from './Voacb';
import LinkInfo from './LinkInfo';
import HomePage from './HomePage';*/
import Game from './Game';

export const Header = () => {

   
    return (
        <>
             <div className="Header">
                 <div id="title">Lang.Cloud</div>
                        
                
                        <Game/>
                
 
      </div>
      </>
    )


}
export default Header;
