    import React,{useState} from 'react'
    import FlashCards from './FlashCards';
    import "./HeaderStyle.css"
import Grammer from './Grammer';

export const Header = () => {
    const [ShowCard,setShowCard]=useState(false);
    const [ShowCardGrammar,setShowCardGrammar]=useState(false);

    return (
        <>
             <div className="Header">
                 <div id="title">LearnArabic</div>
        <button onClick={()=>setShowCard(!ShowCard)} id="divItems">FlashCards</button>
     
        <button onClick={()=>setShowCardGrammar(!ShowCardGrammar)} id="divItems">Grammar</button>{}
        <button id="divItems">Vocab</button>{}
        {ShowCard && <FlashCards />}
        {ShowCardGrammar && ShowCard ===false && <Grammer /> }

      </div>
      </>
    )


}
export default Header;
