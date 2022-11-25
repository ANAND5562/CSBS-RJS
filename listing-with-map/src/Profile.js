import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super();
        this.state={
            list:[
                {fname: "Anand", phone: "7183739328", email: "anand123@gmail.com"},
                {fname: "Sumit", phone: "8934349328", email: "sumit123@gmail.com"},
                {fname: "Abhay", phone: "9183739898", email: "abhay123@gmail.com"}
            ]
        }
    }
  render() {
    return (
      <div>
        <h1>Listing with map</h1>
        {
            this.state.list.map((item)=>
            <div>
                <span>Name : {item.fname}</span>
                <span>Phone : {item.phone}</span>
                <span>Email : {item.email}</span>
            </div>
            )
        }
      </div>
    )
  }
}
