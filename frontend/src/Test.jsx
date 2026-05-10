import {useContext,useState} from 'react'
import { counterContextObj } from './contexts/ContextProvider'
import { useCounterStore } from './store/CounterStore'



function Test() {
    console.log("test")

  const { counter1 , changeCounter } = useContext(counterContextObj)
  // console.log("Home")

  return (
    <div>
      <h1 className='text-4xl'> Counter: {counter1}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Change</button>
      
      <h1 className='text-4xl'> Increment:{counter1}</h1>
      <button onClick={incrementCounter} className='bg-blue-200 p-5'>Increment New Counter1 </button>

    </div>
  )
}

export default Test;