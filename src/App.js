import React, { useEffect} from "react"
import "./App.css"
import Header from "./Header.js"
import ReactGA from 'react-ga';

function App() {
  useEffect(()=>{
    ReactGA.initialize('G-NBQ2D3WLWX');
    ReactGA.pageview("/")
  }
        )
             
  
    return (
      <>
     
      <div className="App">
      <Header />
      </div>
      </>
    )
  }

export default App
