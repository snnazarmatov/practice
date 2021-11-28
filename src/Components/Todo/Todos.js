import React from 'react';
import Card from '../UI/Card';
import AddTodo from './AddTodo';
import { useState } from 'react';

const Todos = (props) => {
    const [items, setItems] = useState([]);
 
  

  const saveTodo = (name) => {
    setItems([...items, name])
  }
    
    return <Card>
        <AddTodo onSaveTodo={saveTodo}/>
            {items.map(item => {
                return (
                    <p>{item.name}</p>
                )
            })}
            
        </Card>
    
}

export default Todos
