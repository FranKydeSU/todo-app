import React from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { Button } from '@mui/material';

export default function Navbar() {
    const { logout, user } = useAuth()
    return (
        <>
            <nav style={{
                backgroundColor: "lightBlue",
                display: "flex",
                alignSelf: "center",
                padding: "0.5rem 3rem",
                justifyContent: "space-between",
            }} className="container">
                <h3>TodoTasks</h3>
                <div className="link">
                    {user ? <Button color="secondary" variant="contained" type="submit" className="btn btn-primary" onClick={logout}>Logout</Button> : ''}
                </div>
            </nav>
        </>
    )
}

