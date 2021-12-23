const TodoItem = (props) => {
    const deleteHandler = () => {
      props.onDelete(props.todo.id);
    };
    const completeHandler = () => {
      props.completed(props.todo.id);
    };
    return (
      <>
        <li
          onClick={completeHandler}
          style={{
            textDecoration: props.todo.completed ? 'line-through' : null,
          }}
        >
          {props.todo.name}
          <button onClick={deleteHandler}>delete</button>
        </li>
      </>
    );
  };
  export default TodoItem;
  import TodoItem from './TodoItem';
  const TodoList = (props) => {
    return (
      <>
        <ul>
          {props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo}
              completed={props.completed}
              onDelete={props.onDelete}
            />
          ))}
        </ul>
      </>
    );
  };
  export default TodoList;
  import { useState, useEffect } from 'react';
  import './App.css';
  import AddForm from './Compnents/AddForm';
  import TodoList from './Compnents/TodoList';
  function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
      const storageTodo = JSON.parse(localStorage.getItem('todos'));
      if (storageTodo) {
        setTodos(storageTodo);
      }
    }, []);
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const saveTodo = (todo) => {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            name: todo,
            id: Math.random().toString(),
          },
        ];
      });
    };
    const completeHandler = (id) => {
      setTodos((prevTodos) => {
        const updateTodos = prevTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
        return updateTodos;
      });
    };
    const deleteTodo = (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    return (
      <div className="App">
        <AddForm onAddtodo={saveTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          completed={completeHandler}
        />
      </div>
    );
  }
  export default App;
 import React, { useState } from 'react';
  const AddForm = (props) => {
    const [todo, setTodo] = useState('');
    const inputChangeHandler = (e) => {
      setTodo(e.target.value);
    };
    const submitHandler = (e) => {
      e.preventDefault();
      props.onAddtodo(todo);
      setTodo('');
    };
    return (
      <>
        <form onSubmit={submitHandler}>
          <input type="text" onChange={inputChangeHandler} value={todo} />
          <button>Add todo</button>
        </form>
      </>
    );
  };
  export default AddForm;
  
  
  
  
  
  
  
  
  