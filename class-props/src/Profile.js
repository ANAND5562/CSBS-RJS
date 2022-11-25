import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.text.fname}</h1>
        <h1>{this.props.data}</h1>
      </div>
    )
  }
}