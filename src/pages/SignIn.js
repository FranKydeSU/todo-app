import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import getObjForm from '../utils/form';
import { signin } from '../services/auth'

export default function SignIn() {

    //const navigate = useNavigate()

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const { user, setUserInfo, logout } = useAuth()
    // console.log(user)

    // Object inputing
    // const handleChange = e => {
    //     const { target } = e;
    //     const { name } = target;
    //     const value = name === 'term' ? target.checked : target.value;
    //     setInput({
    //         ...input,
    //         [name]: value
    //     });
    // }

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = getObjForm(e.target)
        console.log(data)
        signin(data).then(response => console.log('response', response))
            .catch(error => console.log('error', error));

        // console.log('submit value', input)
    }

    return (
        <>
            <h1>User: {user}</h1>
            <AuthForm isRegister={false} onSubmit={handleSubmit} />
            <Link to="/signup">Signup</Link>
            <br />
            <button className="btn btn-primary" onClick={logout}>Logout</button>
        </>
    )
}
