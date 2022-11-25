//(rcc)
import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            fname: "Anand Kumar!",
            email: "anand123@gmail.com",
            count: 0
        }
    }

    //Defining updateState function
    updateState(){
         this.setState({
            fname: "Sumit Kumar!",
            count: this.state.count+1
         })
    }

    render() {
        //for every change in state the render will called automatically!!
        console.warn("render!!");
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <h1>Hello, {this.state.fname}</h1>
                <h1>Email : {this.state.email}</h1>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>
        )
    }
}