import React, { useState } from 'react'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'
import getObjForm from '../utils/form';
import { useAuth } from '../contexts/AuthProvider';
import { signup } from '../services/auth';
import Alert from '../components/Alert';

export default function SignUp() {

    const { setUserInfo } = useAuth()
    const [error, setError] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = getObjForm(e.target)
        console.log(data)
        signup(data).then(response => {
            setUserInfo(response.user.name)
            console.log('response', response)
        })
            .catch(error => {
                setError(error.response.data)
                console.log('error', error.response.data)
            });
        // console.log('submit value', input)
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error && <Alert />}
            <AuthForm isRegister={true} onSubmit={handleSubmit} />
            <Link to="/signin">Signin</Link>
        </>
    )
}
