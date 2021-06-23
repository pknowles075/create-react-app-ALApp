    import React,{useState} from 'react'
    import FlashCards from './FlashCards';
    import "./HeaderStyle.css"


export const Header = () => {
    const [ShowCard,setShowCard]=useState(false);

    return (
        <>
             <div className="Header">
        <button id="divItems"onClick={()=>setShowCard(!ShowCard)}>FlashCards</button>{ShowCard && <FlashCards />}
     
       
      </div>
      </>
    )


}
export default Header;
