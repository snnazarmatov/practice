import React from 'react';
import Card from '../UI/Card';
import AddTodo from './AddTodo';
import { useState } from 'react';

const Todos = (props) => {
    const [items, setItems] = useState([]);
 
  // const DeleteHandl = () => {
  // }

  const saveTodo = (name) => {
    setItems([...items, name,Math.random().toString()])
  }
    
    return <Card>
      <AddTodo onSaveTodo={saveTodo}/>
            {items.map(item => {
              return (
                <Card>
                <p>{item.name}</p>
                </Card>
                )
              })}
            
        </Card>
    
}

export default Todos
