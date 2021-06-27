import React from 'react'
import './LeaderBoardMain.css';
function LeaderBoardMain() {
    const score=localStorage.getItem('myData');
    console.log("hi")
    return (
        <div id="mainScore">
            Your High Score is <br></br>{score}
            
        </div>
    )
}

export default LeaderBoardMain
