import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'

import { styles } from './styles'
import { Button } from '../../components/Button'
import { Field } from '../../components/Field'
import { PasswordStrengthMeter } from '../../components/PasswordStrengthMeter'
import { useAuth } from '../../hooks/auth'
import { ProfileParamsList, UserProps } from '../../types'
import { UpdateUser } from '../../functions'
import { StackNavigationProp } from '@react-navigation/stack'

interface EditProfileProps {
    navigation: StackNavigationProp<ProfileParamsList, 'EditProfile'>
}

export function EditProfile({ navigation }: EditProfileProps) {
    const { user, setUser } = useAuth()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SetDisabled = () => {
        if (
            firstName === '' &&
            lastName === '' &&
            email === '' &&
            password === ''
        )
            return true
        return false
    }

    const handlePress = async (
        firstNameRef: string,
        lastNameRef: string,
        emailRef: string,
        passwordRef: string
    ) => {
        const updatedUser: UserProps = {
            ...user,
            firstName: firstNameRef === '' ? user.firstName : firstNameRef,
            lastName: lastNameRef === '' ? user.lastName : lastNameRef,
            email: emailRef === '' ? user.email : emailRef,
            password: passwordRef === '' ? user.password : passwordRef,
        }
        UpdateUser(updatedUser)
        setUser(updatedUser)
    }

    return (
        <KeyboardAvoidingView
            style={styles.background}
            behavior="position"
            keyboardVerticalOffset={-100}
        >
            <View style={styles.container}>
                <Text style={styles.text}>First Name</Text>
                <Field
                    values={{ text: firstName, setText: setFirstName }}
                    placeholder={user.firstName}
                    defaultValue={user.firstName}
                />

                <Text style={styles.text}>Last Name</Text>
                <Field
                    values={{ text: lastName, setText: setLastName }}
                    placeholder={user.lastName}
                    defaultValue={user.lastName}
                />

                <Text style={styles.text}>E-mail</Text>
                <Field
                    values={{ text: email, setText: setEmail }}
                    placeholder={user.email}
                    defaultValue={user.email}
                    keyboardType={'email-address'}
                />

                <Text style={styles.text}>Password</Text>
                <Field
                    values={{ text: password, setText: setPassword }}
                    placeholder={user.password}
                    defaultValue={user.password}
                    isPassword
                />
                <PasswordStrengthMeter password={password} />

                <View style={{ marginTop: 50 }}>
                    <Button
                        title="Apply Changes"
                        width={'100%'}
                        height={60}
                        disabled={SetDisabled()}
                        onPress={() =>
                            handlePress(
                                firstName,
                                lastName,
                                email,
                                password
                            ).then(() => {
                                navigation.navigate('Profile')
                            })
                        }
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
