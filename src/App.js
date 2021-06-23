import React, { Component } from "react"
import "./App.css"
import Header from "./Header.js"
import  FlashCards  from "./FlashCards"
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <FlashCards/>
      </div>
    )
  }
}

export default App
