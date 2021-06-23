    import React,{useState} from 'react'
    import FlashCards from './FlashCards';
    import "./HeaderStyle.css"
import Grammer from './Grammer';
import Voacb  from './Voacb';
export const Header = () => {
    const [ShowCard,setShowCard]=useState(false);
    const [ShowCardGrammar,setShowCardGrammar]=useState(false);
    const [ShowCardVocab,setShowCardVoacb]=useState(false);

    return (
        <>
             <div className="Header">
                 <div id="title">LearnArabic</div>
        <button onClick={()=>setShowCard(!ShowCard)} id="divItems">FlashCards</button>
     
        <button onClick={()=>setShowCardGrammar(!ShowCardGrammar)} id="divItems">Grammar</button>{}
        <button onClick={()=>setShowCardVoacb(!ShowCardVocab)} id="divItems">Vocab</button>{}
        {ShowCard && <FlashCards />}
        {ShowCardGrammar && ShowCard ===false && <Grammer /> }
        {ShowCardVocab && ShowCardGrammar ===false &&<Voacb /> }
      </div>
      </>
    )


}
export default Header;
