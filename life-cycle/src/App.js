// //1)
// //Life Cycle
// //moto->(i)constructor runs first, (ii)render runs second, (iii)componentDidMount runs third
// //class-component(rcc)
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     console.warn("This alert is from constructor!");
//   }
//   //This componentDidMount() will called when our data is ready!
//   componentDidMount(){
//     console.warn("This warn is from componentDidMount!");
//   }
//   render() {
//     console.warn("This warn is from render!");
//     return (
//       <div>
//         <h1>Life Cycle method</h1>
//       </div>
//     )
//   }
// }


// //2)(rcc)
// //componentDidMount
// import React, { Component } from 'react'

// export default class App extends Component {

//   //2)
//   constructor() {
//     super();
//     this.state = {
//       data: null
//     }
//     console.warn("Warn from Component!");
//   }

//   //3)
//   componentDidMount(){
//     //The render() will call again automatically due to this setState()
//     this.setState({data:"Data is updated!!"});
//     console.warn("Warn from componentDidMount!")
//   }

//   //2)
//   render() {
//     console.warn("Warn from render!");
//     return (
//       <div>
//         <h1>Life Cycle Method : ComponentDidMount</h1>
//       </div>
//     );
//   }
// }


// //3)
// //componentDidUpdate
// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super();
//     this.state={
//       active: null,
//       who: null
//     }
//   }

//   componentDidUpdate(){
//     console.warn("Warn from componentDidUpdate!!");

//     if(this.state.who==null){
//       this.setState({who:"Anand Kumar"})
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Life Cycle Method : ComponentDidUpdate {this.state.who}</h1>
//         <button onClick={()=>{this.setState({activate: "yes"})}}>Activate</button>
//       </div>
//     )
//   }
// }

//4)
//componentWillUnmount
//need another file-> (Profile.js)
import React, { Component } from 'react'
import Profile from './Profile'

export default class App extends Component {

  constructor(){
    super();
    this.state={
      toggle: true
    }
  }

  render() {
    return (
      <div>
        <h1>React :: Component Will Unmount</h1>
        {
          this.state.toggle ? <Profile / > : null
        }
        <button onClick={()=>{this.setState({toggle: !this.state.toggle})}}>Delete User</button>
      </div>
    )
  }
}

