import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState([])
    const navigate = useNavigate()

    const setUserInfo = (user) => {
        localStorage.setItem('username', user)
        setUser(user)
        navigate('/home')
    }

    const setToken = (token) => {
        localStorage.setItem('token', token)
    }

    const logout = () => {
        console.log('logout')
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser([])
        navigate('/signin')
    }

    useEffect(() => {
        const oldUser = localStorage.getItem('user')
        // console.log(oldUser)
        if (oldUser) {
            navigate('/home')
            setUser(oldUser)
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                setUserInfo,
                logout,
                setToken
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
