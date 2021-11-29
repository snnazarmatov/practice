import React,{useReducer} from 'react';
import TodosRender from './TodosRender';


const initState = {
    input: '',
    DATA: [],
}

const todoReducer = (state, action) => {
    switch (action.type) { // action.type === 'GET_VALUE'
        case 'GET_VALUE':
            return {...state, input: action.payload } 
        case 'CLEAR':
            return {DATA: [...state.DATA, action.DATA], input: action.payload }
        default:
    }
    

}

const Todos = (props) => {
    const [inputState, dispatchTodo] = useReducer(todoReducer, initState)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatchTodo({type: 'CLEAR', payload: '', DATA: inputState.input})
        
        console.log(inputState);
    }


    const inputChangeHandler = (e) => {
        dispatchTodo({type: 'GET_VALUE',payload: e.target.value })
    }





    return (
        <>
        <form onSubmit={submitHandler}>
            <input onChange={inputChangeHandler} type='text' value={inputState.input}/>
            <button type='submit'>AddTodo</button>
        </form>
        <TodosRender inputState={inputState}/>
        </>
    )
}

export default Todos
