import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { setDoc, collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConnection';

export const AuthContext = createContext({})

function AuthProvider({ children }){
    const [signed, setSigned] = useState(false)
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, async (user)=>{
            if(user){
                setAuthUser({
                    email: user.email,
                    uid: user.uid,
                    profilePic: user.photoURL,
                    telefone: user.phoneNumber
                })
                
                try {
                    const docRef = doc(db, 'users', user.uid)
                    const docSnap = await getDoc(docRef)

                    if (docSnap.exists()) {
                        const userData = docSnap.data()
                        setUser({
                            email: userData.email,
                            uid: userData.userId,
                            nome: userData.nome
                        })
                    } else {
                        setUser({
                            email: user.email,
                            uid: user.userId,
                            nome: user.name
                        })
                    }
                } catch(error) {
                    console.log(error)
                }

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
            
            let userId = response.user.uid

            await setDoc(doc(db, 'users', userId), {
                nome: nome,
                userId,
                email: email,
                createdAt: new Date()
            })

            const data = {
                nome: nome,
                userId,
                email: email
            }

            setUser(data)
            setLoading(false)
            alert('Usuário cadastrado')
        } catch(error) {
            alert(error)
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