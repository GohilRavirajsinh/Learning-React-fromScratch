import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            name: "todo msg",
            completed: false,
        }
    ],
    addTodo: (name) => {},
    updateTodo: (id, name) => {},
    deleteTodo: (id) => {},
    toggleCompleteTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider