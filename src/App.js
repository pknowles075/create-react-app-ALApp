import React, { Component } from "react"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

 
  render() {
  }
    return(

    );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> test
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
