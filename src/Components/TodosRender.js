import React from 'react'

const TodosRender = (props) => {
    console.log(props);
    return props.inputState.map((todo) => (
        {todo.inputState}
    )) 
        
           
        
    
}

export default TodosRender
