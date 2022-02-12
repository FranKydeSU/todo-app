import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [user, setUser] = useState('No user')

    const setUserInfo = (user) => {
        localStorage.setItem('user', user)
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUser('No user')
    }

    useEffect(() => {
        const oldUser = localStorage.getItem('user')
        // console.log(oldUser)
        if (oldUser) setUser(oldUser)
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
