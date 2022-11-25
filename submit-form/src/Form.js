import React, { Component } from 'react'

export default class Form extends Component {

    constructor() {
        super()
        this.state = {
            user: null,
            password: null
        }
    }
    //To print the exact value of each state
    submit() {
        console.warn(this.state);
    }

    render() {
        return (
            <div>
                <h1>Form Handling Component</h1>
                <input 
                type="text" 
                name="User" 
                onChange={(e) => { this.setState({ user: e.target.value }) }} />
                <br/><br />

                <input 
                type="password" 
                name="password" 
                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <br></br><br />

                <button type="submit" onClick={() => this.submit()}>Submit</button>
                <br />
            </div>
        )
    }
}