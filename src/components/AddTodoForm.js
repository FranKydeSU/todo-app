import React from 'react'

export default function AddTodoForm({ onAddTodo }) {

    return (
        <form onSubmit={onAddTodo}>
            <input type="text" placeholder="add todo" name="description" />
            <button type="submit">add</button>
        </form>
    )
}
