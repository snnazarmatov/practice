import React from 'react';
import Card from '../UI/Card';
import AddTodo from './AddTodo';
import { useState } from 'react';

const Todos = (props) => {
    const [items, setItems] = useState([]);
    console.log(items);
 
 
  const saveTodo = (name) => {
    console.log(name);
    setItems([...items, name,Math.random().toString()])
  }

  const deleteItem = (id) => {
    console.log(id);
    const newItems =([ items.filter(item => item.id !== id)])
    setItems(newItems)
    console.log(newItems);
  }

    
    return <Card>
      <AddTodo onSaveTodo={saveTodo}/>
            {items.map(item => {
              return (
                <Card>
                <p onClick={deleteItem}>{item.name}</p>
                </Card>
                )
              })}
            
        </Card>
    
}

export default Todos
