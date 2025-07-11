import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [signed, setSigned] = useState(false)
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true) 

    const navigation = useNavigation()

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser({
                    email: user.email,
                    uid: user.uid,
                    profilePic: user.photoURL,
                    telefone: user.phoneNumber
                })
                setSigned(true)
            } else {
                setAuthUser(null)       
                setSigned(false)         
            }
            setLoading(false)
        })

        return unsub

    }, [])

    async function signIn(email, password){
        setLoading(true) 
        try {
            await signInWithEmailAndPassword(auth, email, password)
            
        } catch(err) {
            console.log(err)
            alert(err)
            setLoading(false) 
        }
    }

    async function registerUser(email, password){
        setLoading(true) 
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            navigation.navigate('LogIn')
        } catch(error) {
            console.log(error)
            setLoading(false) 
        }
        
    }

    async function logOut(){
        setLoading(true) 
        try {
            await signOut(auth)
            setAuthUser(null)
            setSigned(false)
        } catch(error) {
            console.log(error)
        }
        setLoading(false) 
    }

    return (
        <AuthContext.Provider value={{ signed, signIn, registerUser, setSigned, authUser, logOut, loading }}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider