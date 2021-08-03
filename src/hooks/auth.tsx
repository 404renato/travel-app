import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react'

import { Alert } from 'react-native'

import { AuthContextProps, UserProps } from '../types'

import firebase from 'firebase'
import 'firebase/firestore'

import { UpdateUser, Warning } from '../functions'

export const AuthContext = createContext({} as AuthContextProps)

export const firebaseConfig = {
    apiKey: 'AIzaSyBCmDqFbTb3Y0xXGoP7idyOxKog_kO1cFs',
    authDomain: 'travel-app-8dd35.firebaseapp.com',
    projectId: 'travel-app-8dd35',
    storageBucket: 'travel-app-8dd35.appspot.com',
    messagingSenderId: '292187274053',
    appId: '1:292187274053:web:db801650cc25f98740dc2c',
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState({} as UserProps)
    const [loading, setLoading] = useState(false)

    const signIn = async (email: string, password: string) => {
        setLoading(true)
        await firebase
            .firestore()
            .collection('Users')
            .get()
            .then((snapshot) => {
                let itExists = false

                snapshot.forEach((doc) => {
                    let user = doc.data() as UserProps
                    if (user.email === email && user.password === password) {
                        user.auth = true
                        console.log(user)
                        UpdateUser(user)
                        setUser(user)
                        itExists = true
                    }
                })
                if (!itExists) Warning('Error', 'User not found.')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const signUp = async (user: UserProps) => {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(() => {
                let firebaseUser = firebase.auth().currentUser
                if (firebaseUser)
                    firebase
                        .firestore()
                        .collection('Users')
                        .doc(firebaseUser.uid)
                        .set(user)
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setLoading(false)
            })

        setUser(user)
    }

    const signOut = async () => {
        const updatedUser = {
            ...user,
            auth: false,
        }
        UpdateUser(updatedUser)
        setUser(updatedUser)
    }

    const loadUser = async () => {
        let firebaseUser = firebase.auth().currentUser
        if (firebaseUser)
            await firebase
                .firestore()
                .collection('Users')
                .doc(firebaseUser.uid)
                .get()
                .then((doc) => {
                    if (doc.exists) setUser(doc.data() as UserProps)
                })
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{ user, setUser, loading, signIn, signUp, signOut }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}
