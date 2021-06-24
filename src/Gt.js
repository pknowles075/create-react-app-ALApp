import React from 'react'
import "./ColorText.css"
import "./Gt.css"
const Gt = () => {
    return (
         
        <h1> 
            <h3>1.  Goat in arabic?</h3>
           <form>
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Kalb
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Maiz
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Qui
           <h3>2.  Dog in arabic?</h3>
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Kalb
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Maiz
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Qui
           <h3>3. Cat  in arabic?</h3>
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Kalb
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Maiz
           <input type="radio" defaultChecked={false} disabled={true} value={"nothing"}/>Qui

           </form>

            <p>
                AnswerKey:
                1:B
                2:A
                3:C
            </p>
       

        </h1>
    )
}

export default Gt
