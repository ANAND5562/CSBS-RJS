import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      password: "",
      nameError: "",
      passError: ""
    }
  }

  valid(){
    if(!this.state.fname.includes("@") && (this.state.password.length<8)){
      this.setState({nameError: "Invalid Name.", passError: "Password length should be more then 7."})
    }
    else if(!this.state.fname.includes("@")){
      this.setState({nameError: "Invalid Name."})
    }
    else if((this.state.password.length<8)){
      this.setState({passError: "Password length should be more then 7."})
    }
    else{
      return true
    }
  }

  subfunction(){
    // //to update a new blank form(moto-> to erase error)
    this.setState(
      {nameError: "", passError: ""}
    )
    if (this.valid()){
      alert("Form has been submitted!")
    }
  }

  render() {
    return (
      <div>
        <h1>This is Form component!</h1>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Name</label>
            <input
            type="text"
            className="form-control"
            id="text"
            aria-describedby="emailHelp"
            onChange={(event)=>{this.setState({fname: event.target.value})}} />
            <p style={{color:"red", fontSize:"14px"}}>{this.state.nameError}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Passw</label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event)=>{this.setState({password: event.target.value})}}
             />
             <p style={{color: "red", fontSize:"14px"}}>{this.state.passError}</p>
          </div><br />

          <button type="submit" className="btn btn-primary" onClick={()=>this.subfunction()}>Submit</button>
      </div>
    )
  }
}