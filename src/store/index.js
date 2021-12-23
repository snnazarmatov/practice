import { createStore } from "redux"

const init = {
    todos: []
}

const todoReducer = (state = init, action) => {
    if (action.type === 'TODO') {
        return {
            ...state,
            todos: [...state.todos, action.value]
        }
    }
    if (action.type === 'DELETE') {
        return {
            ...state,
            todos: state.todos.filter(item => item.id !== action.id)
        }
    }
    return state
}

const store = createStore(todoReducer)

export default store