import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import getObjForm from '../utils/form';
import { signin } from '../services/auth'
import Alert from '../components/Alert';

export default function SignIn() {
    const { setUserInfo, setToken } = useAuth()
    const [error, setError] = useState()

    const navigate = useNavigate()

    // Submit
    const handleSubmit = async (e) => {

        e.preventDefault()
        const data = getObjForm(e.target)
        console.log(data)
        signin(data).then(response => {
            console.log('response', response.user)
            setUserInfo(response.user.name)
            setToken(response.token)
            console.log('/')
            navigate("/")
        })
            .catch(error => {
                setError(error.response.data)
                console.log('error', error.response.data)
            });

    }

    return (
        <div className='container d-flex justify-content-center main'>
            <div className='mt-5 w-50'>
                <h2 className='text-center'>Sign In</h2>
                {error && <Alert error={error} />}
                {/* <h3>User: {user}</h3> */}
                <AuthForm isRegister={false} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}
