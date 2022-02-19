import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState([])
    const navigate = useNavigate()

    const setUserInfo = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        navigate('/home')
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUser({})
        navigate('/signin')
    }

    useEffect(() => {
        const oldUser = localStorage.getItem('user')
        // console.log(oldUser)
        if (oldUser) {
            navigate('/home')
            setUser(JSON.stringify(oldUser))
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
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
