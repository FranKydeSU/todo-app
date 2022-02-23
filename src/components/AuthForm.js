import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { TextField, Box } from '@mui/material';

export default function AuthForm({ isRegister, onSubmit }) {
    //const navigate = useNavigate()

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

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
                    <input type="text" className="form-control" name="name" onChange={handleChange} />
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                </div>
            }
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                <Box component="form"
                    sx={{
                        '& .MuiTextField-root': { width: '100%' },
                    }}
                    noValidate
                    autoComplete="off">
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                </Box>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
            </div>
            {isRegister ? <p>If you are register, please <Link to="/signin">sign in</Link> </p> : <p>If you are not register, please <Link to="/signup">sign up</Link> </p>}
            <Button color="primary" variant="contained" type="submit" className="btn btn-primary">{isRegister ? 'Sign Up' : 'Sign In'}</Button>
        </form>
    )
}
