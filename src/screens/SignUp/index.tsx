import React, { useState } from 'react'
import {
    View,
    Image,
    ActivityIndicator,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { Entypo } from '@expo/vector-icons'

import { Logo } from '../../constants/images'
import { Field } from '../../components/Field'
import { Button } from '../../components/Button'

import { AuthParamsList, UserProps } from '../../types'
import { styles } from './styles'
import { useAuth } from '../../hooks/auth'
import { PasswordStrengthMeter } from '../../components/PasswordStrengthMeter'
import { ValidateEmail, ValidatePassword, Warning } from '../../functions'

interface SignUpProps {
    navigation: StackNavigationProp<AuthParamsList, 'SignUp'>
}

export function SignUp({ navigation }: SignUpProps) {
    const { loading, signUp } = useAuth()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlePress = () => {
        if (
            ValidateEmail(email) &&
            ValidatePassword(password) &&
            firstName !== '' &&
            lastName !== ''
        ) {
            const user: UserProps = {
                avatar: '',
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                auth: true,
                favorites: new Array(),
                bookings: new Array(),
            }
            signUp(user)
        } else Warning('Error', 'User Invalid.')
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="position"
            keyboardVerticalOffset={-150}
        >
            <Image
                source={Logo}
                style={styles.image}
                resizeMode="stretch"
                resizeMethod="scale"
            />

            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <View style={styles.backIcon}>
                    <Entypo name="chevron-left" size={36} color="white" />
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.content}>
                <Field
                    values={{ text: firstName, setText: setFirstName }}
                    placeholder="First Name"
                />

                <Field
                    values={{ text: lastName, setText: setLastName }}
                    placeholder="Last Name"
                />

                <Field
                    values={{ text: email, setText: setEmail }}
                    placeholder="E-mail"
                    keyboardType={'email-address'}
                />

                <Field
                    values={{ text: password, setText: setPassword }}
                    placeholder="Password"
                    isPassword
                />
                <PasswordStrengthMeter password={password} />
            </View>

            {loading ? (
                <ActivityIndicator color="black" />
            ) : (
                <Button
                    title="Sign up"
                    width={180}
                    height={60}
                    onPress={() => handlePress()}
                />
            )}
        </KeyboardAvoidingView>
    )
}
