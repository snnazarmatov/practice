import { useState } from "react"
import { useDispatch } from "react-redux"

const Input = () => {
    const [todos, setTodos] = useState('')
    const dispatch = useDispatch()

    const addInputHandler =(event) => {
        setTodos(event.target.value)
    }

    const submitHandler = event => {
        event.preventDefault()
        setTodos('')
        dispatch({type: 'TODO', value: {
            todos,
            id: Math.random().toString()
        }})
    }

    return (
        <>
            <input value={todos} type='text' onChange={addInputHandler}/>
            <button onClick={submitHandler}>add</button>
        </>
    )
}

export default Input;