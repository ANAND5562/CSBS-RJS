// //1)
// //This is class-component!(rcc)
// import React, { Component } from 'react'

// export default class Profile extends Component {

//     testFun(){
//         alert("This alert from testFun")
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Profile Component!!</h1>
//                 {/* Here we are using this keyword because of class-component!!*/}
//                 {/* <button onClick={()=>{this.testFun()}}>Click Me</button> */}
//                 <button onClick={this.testFun.bind(this)}>Click Me</button>
//             </div>
//         )
//     }
// }


//2)
//This is function-component!(rfc)
import React from 'react'

export default function Profile() {

    function testFun() {
        alert("This alert from testFun")
    }
    return (
        <div>
            <h1>Profile Component</h1>
            <button onClick={testFun}>Clickk me</button>
        </div>
    )
}
