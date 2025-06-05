import React, { createContext, useState } from 'react'
import { auth } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [signed, setSigned] = useState(false)

    function signIn(){
        setSigned(true)
    }

    async function registerUser(email, password){
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        })

        const token = userCredentials.idToken

        await AsyncStorage.setItem(token, )

        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <AuthContext.Provider value={{ signed, signIn, registerUser, setSigned }}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider