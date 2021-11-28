import React,{useState} from 'react'

const AddTodo = (props) => {
    const [name, setName] = useState('');

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let data ={
            name
        }
        props.onSaveTodo(data);
        setName('');

    }
    return <form onSubmit={submitHandler}>
          <input onChange={inputChangeHandler} value={name}/>
          <button type='submit'>AddTodo</button>
        </form>
    
}

export default AddTodo
