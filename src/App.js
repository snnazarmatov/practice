import React, { useRef } from 'react'
import Child from './Components/Childcomponent'


const App = () => {
  const inputRef = useRef(Math.random()) // { current: null }
  const inputRef2 =  { current: Math.random()}
  
  console.log(inputRef);
  console.log(inputRef2);
  const [state, setState] = React.useState(0)
  return (
    <div>
      <input />
      {/* {state && <Child/> } */}
      <button onClick={() => setState(prev => prev + 1)}>Click me</button>
    </div>
  )
}

export default App
