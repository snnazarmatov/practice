import React from 'react'

const App = () => {
  // let array = [1,3,4];
  const [array,setArray] = React.useState([1,3,4])

  // array.push(5);
  const addNumber = () => {
    const arr1 = [...array, Math.round(Math.random() * 10)]
    setArray(arr1)
    console.log(array);
    console.log(Math.random());
    
  }
  return (
    <div>
      <ul>
        {
          array.map((num,index) => (
            <li key={index}>{num}</li>
          ))
        }
      </ul>
      <button onClick={addNumber}>add new number</button>
    </div>
  )
}

export default App
