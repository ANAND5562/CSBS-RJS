// //1)useState hook
// import React, {useState} from 'react'

// export default function Profile() {
//     const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h1>This is functional component {count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>Incriment</button>
//     </div>
//   )
// }


//2)useEffect hook
import React, { useEffect, useState } from 'react'

export default function Profile() {

    const [count, setCount] = useState(0)
    useEffect(()=> {
        console.warn(count);
    },[count===5])

    return (
        <div>
            <h1>This is functional component {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Update State</button>
        </div>
    )
}
