import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import getObjForm from '../utils/form';
import { signin } from '../services/auth'
import Alert from '../components/Alert';

export default function SignIn() {
    const { user, setUserInfo, logout, setToken } = useAuth()
    const [error, setError] = useState()
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
        signin(data).then(response => {
            console.log('response', response.user)
            setUserInfo(response.user.name)
            setToken(response.token)
        })
            .catch(error => {
                setError(error.response.data)
                console.log('error', error.response.data)
            });

        // console.log('submit value', input)
    }

    return (
        <>
            <h2>Sign In</h2>
            {error && <Alert error={error} />}
            <h3>User: {user}</h3>
            <AuthForm isRegister={false} onSubmit={handleSubmit} />
            <Link to="/signup">Signup</Link>
        </>
    )
}
