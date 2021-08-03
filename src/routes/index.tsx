import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'
import { Host } from 'react-native-portalize'
import firebase from 'firebase'
import { UserProps } from '../types'

export function Routes() {
    const { user, setUser } = useAuth()

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
    }, [user])

    return (
        <NavigationContainer>
            <Host>{user.auth ? <AppRoutes /> : <AuthRoutes />}</Host>
        </NavigationContainer>
    )
}
