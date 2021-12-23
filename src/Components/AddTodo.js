import React from 'react'

const AddTodo = (props) => {
    const [name, setName] = React.useState('');

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        props.onSaveTodo(name)
        setName('');
    }
    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputChangeHandler} value={name}/>
            <button type='submit'>AddTodo</button>
        </form>
    )
}

export default AddTodo
