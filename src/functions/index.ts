import { Alert } from 'react-native'

import firebase from 'firebase'

import { UserProps } from '../types'

export const UpdateUser = async (user: UserProps) => {
    let firebaseUser = firebase.auth().currentUser
    if (firebaseUser)
        await firebase
            .firestore()
            .collection('Users')
            .doc(firebaseUser.uid)
            .get()
            .then((doc) => {
                if (doc.exists && firebaseUser) {
                    firebase
                        .firestore()
                        .collection('Users')
                        .doc(firebaseUser.uid)
                        .update(user)
                }
            })
}

export const Warning = (title: string, description: string) =>
    Alert.alert(title, description, [{ text: 'OK', onPress: () => {} }])

export const ValidateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
}

export const ValidatePassword = (password: string) => {
    if (password.length < 8) return false

    return true
}
