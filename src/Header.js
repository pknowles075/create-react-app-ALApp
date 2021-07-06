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
  <meta name="viewport" content="width=1000"></meta>
             <div className="Header">
                 <div id="title">Lang.Cloud</div>
                        
                
                        <Game/>
                
 
      </div>
      </>
    )


}
export default Header;
