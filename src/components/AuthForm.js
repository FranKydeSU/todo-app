import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function AuthForm({ isRegister, onSubmit }) {
    //const navigate = useNavigate()

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const { user, setUserInfo, logout } = useAuth()
    // console.log(user)

    // Object inputing
    const handleChange = e => {
        const { target } = e;
        const { name } = target;
        const value = name === 'term' ? target.checked : target.value;
        setInput({
            ...input,
            [name]: value
        });
    }

    return (
        <form onSubmit={onSubmit}>
            {isRegister &&
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" name="name" onChange={handleChange} />
                </div>
            }
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="term" onChange={handleChange} />
                <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
