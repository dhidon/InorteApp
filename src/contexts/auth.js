import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [signed, setSigned] = useState(false)

    function signIn(){
        setSigned(true)
    }

    return (
        <AuthContext.Provider value={{ signed, signIn }}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider