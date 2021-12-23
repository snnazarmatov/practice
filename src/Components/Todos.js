import React from 'react'
import AddTodo from './AddTodo';

const Todos = () => {
    const [items, setItems] = React.useState([]);

    //saveTodo
    const saveTodo = (name) => {
        setItems([...items,{name:name,id:Math.random().toString()}])
    }
    //filter
    const filterHandler = (id) => {
        setItems((prevItems) => {
            let updateitems = prevItems.filter(item => item.id !== id)
            return updateitems;
        })
    }
    //complated
    const complatedHandler = (id) => {
        console.log(id);
        setItems((prevItems) => {
          const updateItems = prevItems.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return item;
          });
          return updateItems;
        });
      };

    //localStorage getting
    React.useEffect(() => {
        let localstore = JSON.parse(localStorage.getItem('key'))
        if(localstore)
            setItems(localstore)
        
    },[])
    //localStorage setting
    React.useEffect(() => {
        localStorage.setItem('key', JSON.stringify(items))
    }, [items])
    
    return (
        <div>
            <AddTodo onSaveTodo={saveTodo}/>
            {items.map(item => {
                return (
                    <ul>
                    <li key={item.id}
                     onClick={completeHandler}
                     style={{
                       textDecoration: props.todo.completed ? 'line-through' : null,
                     }}
                    >
                        {item.name}
                    <button type='submit' onClick={() => filterHandler(item.id)}>delete</button>
                    <button type='submit' onClick={() => complatedHandler(item.id)}>done</button>
                    </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Todos
