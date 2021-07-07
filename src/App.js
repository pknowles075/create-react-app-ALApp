import React, { Component} from "react"
import "./App.css"
import Header from "./Header.js"
import gtag from "./OfficalGtag"
class App extends Component {
  render() {
    return (
      <>
      <head>
        <gtag></gtag>
      </head>
      <div className="App">
      <Header />
      </div>
      </>
    )
  }
}

export default App
