import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

export default function Navbar() {
    const { logout } = useAuth()
    return (
        <>
            <div style={{
                backgroundColor: "lightBlue",
                display: "flex",
                alignItems: "center",
                padding: "0.5rem 3rem",
                justifyContent: "space-between",
            }}>
                <h3>
                    <Link to="/" style={{
                        textDecoration: "none"
                    }}>Todo</Link>
                </h3>
                <div className="link">
                    <Link to="/signin">Sign in</Link>
                    <Link to="/signup">Sign up</Link>
                    <button className="btn btn-primary" onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    )
}

