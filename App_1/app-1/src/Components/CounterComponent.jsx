// import React, {useState} from 'react'

import { useEffect } from 'react';
import MyComp from './MyComp';
import { useState } from 'react';

// const CounterComponent = () => {

    
  
//   const [count, setCount] = useState(15);
//   const [value, setValue] = useState("Sam");
  

//     return (
//     <div>
//         <p>Count is {count}</p>
//         <button onClick={() => setCount(count+1)}>Increment</button>
//         <button onClick={() => setCount(count-1)}>Decrement</button>
//         <h6>Number is {count %2 == 0 ? "Even" : "Odd"}</h6>
        
//         <p>Hello my name is {value}</p>
//         <button onClick={() => setValue("Suyash")}>Change</button>
//     </div>
//   )
// };

// export default CounterComponent;

function Foo (){
  useEffect(() => {
    console.log("I am Mounting")

  }, [])

  const [isvisible, setVisible] =useState(true);


  return (
    <div className=''>
    {isvisible? <MyComp/> :<></>}
    <button onClick={() => setVisible(!isvisible)}>Toggle</button>
    </div>
  )
}

export default Foo;