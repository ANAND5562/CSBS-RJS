//(rfc)
import React from 'react'

export default function Profile(props) {
  return (
    <div>
        {/* <h1>This is Profile Component!</h1> */}
        {/* <h1>{props.text}</h1> */}
        <h2>{props.myobj.fname}</h2>
        <h2>{props.lname}</h2>
    </div>
  )
}
