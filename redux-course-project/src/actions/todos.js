import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

const addTodo = (todo) =>  {
    return {
        type: ADD_TODO,
        todo
    }
}

const remoteTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
}

const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const handleAddTodo = (name, cb) => {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo))
                cb()
            })
            .catch(()=> alert(`An error has occurred. Try again.`))
    }
}

export const handleToggle = (id) => {
    return (dispatch) => {
        dispatch(toggleTodo(id))
        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodo(id))
                alert(`An error occurred. Try again.`)
            })
    }
}

export const handleDeleteTodo = (todo) => {
    return (dispatch) => {
        dispatch(remoteTodo(todo.id))
        return API.deleteTodo(todo.id)
        .catch(() => {
            dispatch(addTodo(todo))
            alert(`An error occurred. Try again`)
        })
    } 
}