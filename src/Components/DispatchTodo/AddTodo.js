import React,{useReducer} from 'react';


const TodoReducer = () => {
    switch (action.type) {
        case "ADD_TODO":
            
            break;
    
        default:
            break;
    }
}

const AddTodo = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)

    const inputChangeHandler = (e) => {
        dispatch({"ADD_TODO", type: value})
    }

    const submitHandler = () => {
        
    }
    return (
        <div>
            
        </div>
    )
}

export default AddTodo
