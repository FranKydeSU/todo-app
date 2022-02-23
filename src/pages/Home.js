import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useAuth } from '../contexts/AuthProvider';
import TodoItem from '../components/TodoItem'
import AddTodoForm from '../components/AddTodoForm'
import getObjForm from '../utils/form';

export default function Home() {
    const [todos, setTodos] = useState()
    const { user } = useAuth()

    function getTodos() {

        axios.get('https://saengthong-task-manager.herokuapp.com/tasks', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setTodos(res.data)
            // console.log(res.data); // for see all tasks in this user.
        }).catch(err => console.log(err))

    }

    function addTodo(data) {

        axios.post('https://saengthong-task-manager.herokuapp.com/tasks', data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                // console.log(res.data); // for see which add task is
                setTodos((todos) => [...todos, res.data])
            })
            .catch(err => console.log(err))

    }

    function removeTodo(id) {

        axios.delete(`https://saengthong-task-manager.herokuapp.com/tasks/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                // console.log(res.data); // for see which remove task is
                setTodos(todos => todos.filter(todo => todo._id !== id))
            })
            .catch(err => console.log(err))

    }

    function toggleTodo(id, status) {

        axios.patch(`https://saengthong-task-manager.herokuapp.com/tasks/${id}`,
            { completed: status },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                console.log(res.data); // for see which toggle task is
                setTodos((todos) => todos.map((todo) => todo._id === id ? { ...todo, completed: status } : todo))
                console.log('todos', todos)
            })
            .catch(err => console.log(err))

    }

    useEffect(() => {

        getTodos()

    }, [])

    const onAddTodo = (e) => {

        e.preventDefault()
        const data = getObjForm(e.target)
        console.log(data)
        addTodo(data)
        e.target.reset()

    }

    const onRemoveTodo = (id) => {
        removeTodo(id)
    }

    const onToggleTodo = (id, status) => {
        toggleTodo(id, status)
    }

    return (
        <div className="container">
            <div className='main'>
                <h2>{user}'s Todos</h2>
                <AddTodoForm onAddTodo={onAddTodo} />
                {!todos ?
                    'Loading'
                    :
                    todos.map((todo, key) =>
                        <TodoItem todo={todo} key={key} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
                    )
                }
            </div>
        </div>
    )
}
