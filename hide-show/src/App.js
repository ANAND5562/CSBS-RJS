import React, { Component } from 'react'

export default class App extends Component {  
  constructor(){
    super()
    this.state={
      //we can write anything in the place of show!!
      show:true
    }
  }
  render() {
    return (
      <div>
        {
          this.state.show ? <h1>Hide and Show</h1> : null
        }
        {/* <button onClick={() => { this.setState({show:false}) }}>Click me</button> */}
        <button onClick={() => { this.setState({show:!this.state.show}) }}>Toggle me</button>
      </div>
    )
  }
}
