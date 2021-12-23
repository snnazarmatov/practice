import React, { useState } from 'react'
import Input from './Components/Input'
import InputItem from './Components/InputItem'

const App = () => {
  const [isShow, setIsShow] = useState(false)

  const showHandler = () => {
    setIsShow(prev => !prev)
  }
  return (
    <div>
      {isShow && <Input/>}
      <InputItem/>
      <button onClick={showHandler}>show</button>
    </div>
  )
}

export default App
