//(rfc)
//we are adding & importing extra file i.e. (Custom.css)
import React from 'react'
import './Custom.css'

export default function Style(props) {

    const index1 = {
        color: "green",
        fontSize: "36px",
        textAlign: "center"
    }
    const index2 = {
        color: "gray",
        fontSize: "30px",
        textAlign: "center"
    }

    return (
        <div>
            <h1 className='header'>This is global style in React</h1>
            <h1 style={index1}>This is inline style in React</h1>
            <h2 style={props.data==='apply'?index2 :""}>This is conditional style in React</h2>
            <h2 className={props.data==='apply'?'header' :""}>This is also an example of conditional style in React</h2>
        </div>
    )
}
