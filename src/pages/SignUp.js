import React from 'react'
import AuthForm from '../components/AuthForm'
import { Link } from 'react-router-dom'
import getObjForm from '../utils/form';
// import { useState } from 'react';

export default function SignUp() {

    // const [input, setInput] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // });
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = getObjForm(e.target)
        console.log(data)

        // console.log('submit value', input)
    }

    return (
        <>
            <AuthForm isRegister={true} onSubmit={handleSubmit} />
            <Link to="/signin">Signin</Link>
        </>
    )
}
