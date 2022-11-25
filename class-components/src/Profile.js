//(rcc)
import React, { Component } from 'react'

export default class Profile extends Component {

    //we can have constructor in our class-components
    // constructor(){
    //     super()
    // }

    componentDidMount(){
        console.warn("called life cycle");
    }

  render() {
    return (
      <div>
        <h1>Profile Component</h1>
      </div>
    )
  }
}
