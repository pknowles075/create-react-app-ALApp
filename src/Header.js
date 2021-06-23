    import React,{useState} from 'react'
    import FlashCards from './FlashCards';
    import "./HeaderStyle.css"


export const Header = () => {
    const [ShowCard,setShowCard]=useState(false);

    return (
        <>
             <div className="Header">
        <button onClick={()=>setShowCard(!ShowCard)} id="divItems">FlashCards</button>{ShowCard && <FlashCards />}
     
     
       
      </div>
      </>
    )


}
export default Header;
