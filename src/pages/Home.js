import React, { useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem'
import axios from 'axios'
import AddTodoForm from '../components/AddTodoForm'
import { useAuth } from '../contexts/AuthProvider';
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
            console.log(res.data);
            setTodos(res.data)
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
                console.log(res.data);
                setTodos((todos) => [...todos, res.data])
            })
            .catch(err => console.log(err))

    }

    function removeTodo(id) {
        console.log('id', id)
        axios.delete(`https://saengthong-task-manager.herokuapp.com/tasks/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                console.log(res.data);
                setTodos(todos => todos.filter(todo => todo._id !== id))
            })
            .catch(err => console.log(err))

    }

    function toggleTodo(id, status) {
        console.log('id', id)
        console.log('status', status)
        axios.patch(`https://saengthong-task-manager.herokuapp.com/tasks/${id}`,
            { completed: status },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                console.log(res.data);
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
        <div>
            <h2>{user}'s Todos</h2>
            <AddTodoForm onAddTodo={onAddTodo} />
            {!todos ?
                'Loading'
                :
                todos.map((todo, key) =>
                    <TodoItem todo={todo} key={key} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />
                )
            }
            {/* <TodoItem todo={mockTodo} /> */}
        </div>
    )
}
