import React from 'react'
import { ListItemButton, ListItemText } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';

export default function TodoItem({ todo, onRemoveTodo, onToggleTodo }) {

    return (
        <div>
            {/* <p>{todo.description}</p>
            <Button onClick={() => onToggleTodo(todo._id, !(todo.completed))}><FaCheck /></Button>
            <Button onClick={() => onRemoveTodo(todo._id)}><FaTrash /></Button> */}
            <ListItemButton>
                <ListItemText primary={todo.description} className='text-break' />
                <ListItemIcon>
                    <Checkbox onClick={() => onToggleTodo(todo._id, !(todo.completed))} />
                </ListItemIcon>
                <IconButton onClick={() => onRemoveTodo(todo._id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemButton>
        </div >
    )
}
