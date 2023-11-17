import { useState } from "react"
import CounterButton from "./components/CounterButton"
import {doubleTheNum, funckyNum} from './utils'

const App = () => {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(1)
  return (
    <div>
      <CounterButton count={count1} onClick={()=>setCount1(doubleTheNum)} text="2x Count is: "/>
      <CounterButton count={count2} onClick={()=>setCount2(funckyNum)} text="Funcky Count is: "/>
 
    </div>
  )
}

export default App