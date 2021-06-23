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
        <div onClick={()=>setShowCard(!ShowCard)} id="divItems">FlashCards</div>
     
        <div onClick={()=>setShowCardGrammar(!ShowCardGrammar)} id="divItems">Grammar</div>{}
        <div onClick={()=>setShowCardVoacb(!ShowCardVocab)} id="divItems">Vocab</div>{}
        {ShowCard && <FlashCards />}
        {ShowCardGrammar && ShowCard  && <Grammer /> }
        {ShowCardVocab && ShowCardGrammar ===false &&<Voacb /> }
      </div>
      </>
    )


}
export default Header;
