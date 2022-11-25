//(rfc)
import React from 'react'

export default function Profile(props) {
    const myfun= ()=> {
        alert("myfun, function is called!!")
    }
    return (
        <div>
            {/* <h1 onClick={myfun}>Profile Component</h1> */}
            <h1 onClick={myfun}>{props.text}</h1>
        </div>
    )
}