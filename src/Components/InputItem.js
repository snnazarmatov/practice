import { useDispatch, useSelector } from "react-redux"


const InputItem = () => {
    const items = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const removeHandler = id => {
        dispatch({type: 'DELETE', id})
    }

    return (
        <>
            <ul>
                {items.map(item => (
                    <li id={item.id} key={item.id}>
                        {item.todos}
                        <button onClick={() => removeHandler(item.id)}>remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default InputItem;