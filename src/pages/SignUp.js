import React, { useState } from 'react'
import AuthForm from '../components/AuthForm'
import { useNavigate } from 'react-router-dom';
import getObjForm from '../utils/form';
import { useAuth } from '../contexts/AuthProvider';
import { signup } from '../services/auth';
import Alert from '../components/Alert';

export default function SignUp() {

    const { setUserInfo } = useAuth()
    const [error, setError] = useState()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = getObjForm(e.target)
        // console.log(data)
        signup(data).then(response => {
            setUserInfo(response.user.name)
            // console.log('response', response)
            navigate('/signin')
        })
            .catch(error => {
                setError(error.response.data)
                console.log('error', error.response.data)
            });
    }

    return (
        <div className='container d-flex justify-content-center main'>
            <div className='mt-5 w-50'>
                <h2 className='text-center'>Sign Up</h2>
                {error && <Alert error={error} />}
                {/* <h3>User: {user}</h3> */}
                <AuthForm isRegister={true} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}
