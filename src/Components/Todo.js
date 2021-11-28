
import React from 'react';

const Todo = ({value,dispatch}) => {
    return (
        <div>
             {<span style={{textDecoration: value.completed ? "line-through" : ""}}>{value.name}</span>}
             <button onClick={() => dispatch({type: 'toggle',payload: {id: value.id}})}>Toggle</button>
             <button onClick={() => dispatch({type: 'delete', payload: {id: value.id}})}>Delete</button>
        </div>
    )
}

export default Todo
