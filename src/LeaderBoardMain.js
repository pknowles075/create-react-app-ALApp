import React from 'react'
import './LeaderBoardMain.css';
function LeaderBoardMain() {
    var score=localStorage.getItem('myData');
    if(score===null){
        score="Oh no you have no score yet :("
    }
    console.log("hi")
    return (
        <div id="mainScore">
            Your High Score is <br></br>{score}
            
        </div>
    )
}

export default LeaderBoardMain
