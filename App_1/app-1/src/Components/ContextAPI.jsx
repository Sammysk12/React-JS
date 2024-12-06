import React, { useContext } from 'react'
import Counter from './Counter'
import { CounterContext } from '../Contexts/CounterContext'

const ContextAPI = () => {
 
  const counterState = useContext(CounterContext);
  

  console.log(counterState);
  return (
    <div>
      <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default ContextAPI