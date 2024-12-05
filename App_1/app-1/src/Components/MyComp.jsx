import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const MyComp = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log("My component is Mounting");

        return function(){
            console.log("Unmounting.....")
        }
    }, []);
    useEffect(() =>{
        console.log("Count got Updated " + count);

        return function(){
            console.log("Orginal Count is " + count)
        }
    }, [count]);
  return (
    <div>
        <p>Count is {count}</p>
        <button onClick={() => setCount(count +1)}>Update</button>
    </div>
  )
}

export default MyComp;