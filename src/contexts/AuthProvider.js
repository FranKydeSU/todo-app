import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState()
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
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        setUser()
        navigate('/signin')
    }

    useEffect(() => {
        const oldUser = localStorage.getItem('username')

        if (oldUser) {
            navigate('/')
            setUser(oldUser)
        } else {
            navigate('/signin')
        }

    }, [navigate])

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
