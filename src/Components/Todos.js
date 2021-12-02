import React,{useState,useEffect} from 'react';
import AddTodo from './AddTodo';


const Todos = (props) => {

    const [items,setItems] = useState([])

    const saveTodo = (name) => {
        setItems([...items,{name: name, id: Math.random().toString()}]);
    }
    const filterHandler = (id) => {
        setItems((prevItmes) => {
            let updateitems = prevItmes.filter(item => item.id !== id)
            return updateitems
        })
    }
    useEffect(() => {
        let localstore = JSON.parse(localStorage.getItem('key'));
        if(localstore)
        setItems(localstore)
    }, []);
    useEffect(() => {
        localStorage.setItem('key',JSON.stringify(items))
    },[items]);

    return (
        <div>
            <AddTodo onSaveTodo = {saveTodo}/>
            {items.map(item => {
                return (
                    <p key = {item.id} onClick = {() => filterHandler(item.id)}>
                        {item.name}
                    </p>
                )
            })}
        </div>
    )
}

export default Todos
