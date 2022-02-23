import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

export default function AuthForm({ isRegister, onSubmit }) {

    return (
        <form noValidate autoComplete='off' onSubmit={onSubmit} className=''>
            {isRegister &&
                <div className="mb-3">
                    <label>Username</label>
                    <TextField
                        required
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        name="name"
                        type="text"
                        fullWidth
                        size="small"
                    />
                </div>
            }
            <div className="mb-3">
                <label>Email address</label> <br />
                <TextField
                    required
                    label="Email"
                    variant="filled"
                    name="email"
                    type="text"
                    fullWidth
                    size="small"
                />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label>Password</label>
                <TextField
                    required
                    label="Password"
                    variant="filled"
                    name="password"
                    type="password"
                    fullWidth
                    size="small"
                />
            </div>
            <div className="mb-3 text-center">
                {isRegister ? <p>If you are registerd, please <Link to="/signin">sign in here.</Link> </p> : <p>If you are not registerd, please <Link to="/signup">sign up</Link> here.</p>}
                <Button color="primary" variant="contained" type="submit" className='text-center'>{isRegister ? 'Sign Up' : 'Sign In'}</Button>
            </div>
        </form>
    )
}
