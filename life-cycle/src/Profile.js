//4)componentWillUnmount
import React, { Component } from 'react'

export default class Profile extends Component {

    componentWillUnmount(){
        alert("User has been deleted!!")
    }

  render() {
    return (
      <div>
        <ul>
            <li>Name : Anand Kumar</li>
            <li>Email : anand123@gmail.com</li>
            <li>Contact : 7998555375</li>
        </ul>
      </div>
    )
  }
}