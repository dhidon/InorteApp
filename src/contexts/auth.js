import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore';

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [signed, setSigned] = useState(false)
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser({
                    email: user.email,
                    uid: user.uid,
                    profilePic: user.photoURL,
                    telefone: user.phoneNumber
                })
                setUser({
                    email: user.email,
                    uid: user.uid,
                    telefone: user.phoneNumber
                })
            } else {
                setAuthUser(null)       
                setUser(null)        
            }
            setLoading(false)
        })

        return unsub

    }, [])

    async function signIn(email, password){
        setLoading(true) 
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setLoading(false)
        } catch(err) {
            console.log(err)
            alert(err)
            setLoading(false) 
        }
    }

    async function registerUser(email, password, nome){
        setLoading(true) 
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const uid = response.user.uid

            await setDoc(doc(db, 'usuarios', uid), {
                uid: uid,
                nome: nome,
                createdAt: new Date()
            })

            const data = {
                uid: uid,
                nome: nome,
                email: response.user.email
            }

            setUser(data)
            setLoading(false)

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
        <AuthContext.Provider value={{ signed: !!user, signIn, registerUser, setSigned, authUser, logOut, loading, user }}> 
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider