import React from 'react'
// import { useState } from 'react';

export default function SignUp() {

    // const [input, setInput] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    return (
        <>
            <div>
                <h1>Sign Up</h1>
            </div>
            <label>Name: </label>
            <input type="text" className='name' />
            <br />
            <label>Email: </label>
            <input type="text" className='email' />
            <br />
            <label>Password</label>
            <input type="password" className='="password' />
            <br />
            <input type="button" value="Submit" />
        </>
    )
}
