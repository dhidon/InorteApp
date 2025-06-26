import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [signed, setSigned] = useState(false)
    const [authUser, setAuthUser] = useState(null)
    const [user, setUser] = useState(null)

    const navigation = useNavigation()

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser({
                    email: user.user.email,
                    uid: user.user.uid
                })
                setSigned(true)
            }
        })

    }, [])

    async function signIn(email, password){
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setAuthUser({
                email: userCredential.user.email,
                uid: userCredential.user.uid
            })
            setSigned(true)

            let userInfo = userCredential.user

            setUser(userInfo)
            console.log(userInfo)

        } catch (error) {
            alert(error.message)
            console.log(error)
        }
    }

    async function registerUser(email, password){
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        })

        navigation.navigate('LogIn')

        .catch((error)=>{
            console.log(error)
        })
    }

    async function logOut(){
        await signOut(auth)
        setAuthUser(null)
        setSigned(false)
    }

    return (
        <AuthContext.Provider value={{ signed, signIn, registerUser, setSigned, authUser, logOut, user }}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider