import React, { Component} from "react"
import "./App.css"
import Header from "./Header.js"
import ReactGA from 'react-ga';

class App extends Component {
 
  render() {
      ReactGA.initialize('G-NBQ2D3WLWX');
      ReactGA.pageview(window.location.pathname + window.location.search)
  
    return (
      <>
     
      <div className="App">
      <Header />
      </div>
      </>
    )
  }
}

export default App
