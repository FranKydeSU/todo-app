import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
                </div>
            </div>
        </>
    )
}

