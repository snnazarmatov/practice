import React from 'react'

const Todos = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                {props.item.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Todos;
