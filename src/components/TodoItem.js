import React from 'react'
import { FaCheck, FaTrash } from "react-icons/fa";

export default function TodoItem({ todo, onRemoveTodo, onToggleTodo }) {

    return (
        <div style={{ display: "flex" }}>
            <p>{todo.description}</p>
            <button onClick={() => onToggleTodo(todo._id, !(todo.completed))}><FaCheck /></button>
            <button onClick={() => onRemoveTodo(todo._id)}><FaTrash /></button>
        </div>
    )
}
