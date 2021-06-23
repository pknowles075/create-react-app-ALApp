    import React,{useState} from 'react'
    import FlashCards from './FlashCards';
    import "./HeaderStyle.css"


export const Header = () => {
    const [ShowCard,setShowCard]=useState(false);

    return (
        <>
             <div className="Header">
                 <div id="title">LearnArabic</div>
        <button onClick={()=>setShowCard(!ShowCard)} id="divItems">FlashCards</button>{ShowCard && <FlashCards />}
     
        <button id="divItems">Grammar</button>{ShowCard && <FlashCards />}
        <button id="divItems">Vocab</button>{ShowCard && <FlashCards />}

       
      </div>
      </>
    )


}
export default Header;
