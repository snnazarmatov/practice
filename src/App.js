import React,{useState,useReducer} from 'react';
import Todo from './Components/Todo';


const reducer = (state,action) => {
  switch (action.type){
    case "ADD":
      return [...state, {id: Date.now(), name: action.payload.name,completed: false}];
      case 'toggle':
        return state.map((todo) => {
          if(todo.id === action.payload.id){
            return {...todo, completed: !todo.completed,type: 'checkbox'}
          }
          return todo
        })
        case 'delete':
        return state.filter((todo) => todo.id !== action.payload.id)
      default:
        return state 
  }
}

function App() {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer,[]);

  const handlSubmit = () => {
    dispatch({type: 'ADD', payload: {name: name}}
    
    )
    setName('');
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handlSubmit}>Submit</button>
      {
        todos.map((value) => {
          return <Todo value={value} dispatch={dispatch}/>
        })
      }
      
    </div>
  )
}

export default App
