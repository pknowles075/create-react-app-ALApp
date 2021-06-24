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
                 <div id="title">Arabic.Cloud</div>
        <div onClick={()=>{
             setShowCard(true);
             setShowCardGrammar(false)
             setShowCardVoacb(false)
            }
            } id="divItems">FlashCards</div>
     
        <div onClick={()=>{
             setShowCard(false);
             setShowCardGrammar(true)
             setShowCardVoacb(false)
            }
             } id="divItems">Grammar</div>{}
        <div onClick={()=>{ 
            setShowCard(false);
             setShowCardGrammar(false)
             setShowCardVoacb(true)
            }} id="divItems">Vocab</div>{}
        
        
        {ShowCard && <FlashCards />}
        {ShowCardGrammar && ShowCard ===false && <Grammer /> }
        {ShowCardVocab && ShowCardGrammar ===false &&<Voacb /> }
      </div>
      </>
    )


}
export default Header;
