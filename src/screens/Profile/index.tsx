import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import * as ImagePicker from 'expo-image-picker'

import firebase from 'firebase'

import { styles } from './styles'
import { useAuth } from '../../hooks/auth'
import { StackNavigationProp } from '@react-navigation/stack'
import { ProfileParamsList, UserProps } from '../../types'
import { Option } from '../../components/Option'

import { Portal } from 'react-native-portalize'

interface ProfileProps {
    navigation: StackNavigationProp<ProfileParamsList, 'Profile'>
}

export function Profile({ navigation }: ProfileProps) {
    const { user, setUser, signOut } = useAuth()
    const [visible, setVisible] = useState(false)

    const TakePhoto = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()

        if (granted) {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            })

            if (!result.cancelled) {
                let firebaseUser = firebase.auth().currentUser

                const updatedUser: UserProps = {
                    ...user,
                    avatar: result.uri,
                }

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
                                    .update(updatedUser)
                            }
                        })
                setUser(updatedUser)
            }
        }
        setVisible(false)
    }

    const ChooseFromLibrary = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (granted) {
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            })

            if (!result.cancelled) {
                let firebaseUser = firebase.auth().currentUser

                const updatedUser: UserProps = {
                    ...user,
                    avatar: result.uri,
                }

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
                                    .update(updatedUser)
                            }
                        })
                setUser(updatedUser)
            }
        }
        setVisible(false)
    }

    const SetDefault = async () => {
        let firebaseUser = firebase.auth().currentUser

        const updatedUser: UserProps = {
            ...user,
            avatar: '',
        }

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
                            .update(updatedUser)
                    }
                })
        setUser(updatedUser)
        setVisible(false)
    }

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.header}>Profile</Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setVisible(true)}
                >
                    {user.avatar === '' ? (
                        <View style={styles.avatar}>
                            <Ionicons
                                name="person-circle-outline"
                                size={200}
                                color="black"
                            />
                        </View>
                    ) : (
                        <Image
                            source={{ uri: user.avatar }}
                            style={styles.avatar}
                        />
                    )}
                </TouchableOpacity>

                <Text style={styles.username}>
                    {user.firstName} {user.lastName}
                </Text>

                <View style={styles.content}>
                    <Option
                        name="Edit Profile"
                        onPress={() => navigation.navigate('EditProfile')}
                    />
                    <Option
                        name="Bookings"
                        onPress={() => navigation.navigate('Bookings')}
                    />
                    <Option
                        name="Terms of Service (disabled)"
                        disabled
                        onPress={() => navigation.navigate('TermsOfService')}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => signOut()}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sign out</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {visible ? (
                <Portal>
                    <View style={styles.changePhoto}>
                        <Option
                            name="Set Default"
                            bold
                            onPress={() => SetDefault()}
                        />

                        <Option
                            name="Take Photo"
                            bold
                            onPress={() => TakePhoto()}
                        />

                        <Option
                            name="Choose from Library"
                            bold
                            onPress={() => ChooseFromLibrary()}
                        />

                        <Option
                            name="Cancel"
                            bold
                            onPress={() => setVisible(false)}
                        />
                    </View>
                </Portal>
            ) : (
                []
            )}
        </View>
    )
}
