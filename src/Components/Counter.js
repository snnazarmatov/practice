import React,{useState,useReducer} from 'react';


const reducer = (state,action) => {
    switch (action.type) {
        case "DECREMENT": 
            return  state + 1
        case "INCREMENT":
             return  state - 1     
        default: 
        return state
    }
}

const Counter = () => {
    // const [state, setState] = useState(0)
    const [count, dispatch] = useReducer(reducer, 0)


    return (
        <div>
            <h2>counter</h2>
          <span>{count}</span>  
          <button onClick={() => dispatch({type: "DECREMENT"})}>+</button>
          <button onClick={() => dispatch({type: "INCREMENT"})}>-</button>
        </div>
    )
}

export default Counter
