import { Fab, TextField } from '@mui/material'
import React from 'react'
import { ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function AddTodoForm({ onAddTodo }) {

    return (
        <form onSubmit={onAddTodo}>
            <ButtonGroup className='d-flex'>
                <TextField
                    required
                    id="filled-required"
                    label="Add todo"
                    variant="filled"
                    name="description"
                    type="text"
                    fullWidth
                    size="small"
                    className='me-1'
                />
                <Fab color="primary" aria-label="add" size="small" className='align-self-center' type="submit">
                    <AddIcon />
                </Fab>
            </ButtonGroup>
        </form>
    )
}
