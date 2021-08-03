import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    ActivityIndicator,
    KeyboardAvoidingView,
} from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { Field } from '../../components/Field'

import { AuthParamsList } from '../../types'
import { Logo } from '../../constants/images'
import { styles } from './styles'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'
import { Warning } from '../../functions'

interface SignInProps {
    navigation: StackNavigationProp<AuthParamsList, 'SignIn'>
}

export function SignIn({ navigation }: SignInProps) {
    const { loading, signIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { tertiary } = theme.colors

    const ValidateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="position"
            keyboardVerticalOffset={-200}
        >
            <Image
                source={Logo}
                style={styles.image}
                resizeMode="stretch"
                resizeMethod="scale"
            />

            <View style={styles.content}>
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
            </View>

            {loading ? (
                <ActivityIndicator color="black" />
            ) : (
                <Button
                    title="Sign in"
                    width={180}
                    height={60}
                    onPress={() => {
                        if (email === '' && password === '')
                            Warning('Error', 'All fields are required.')
                        else if (email === '')
                            Warning('Error', 'E-mail field is required.')
                        else if (password === '')
                            Warning('Error', 'Password field is required.')
                        else if (ValidateEmail(email)) signIn(email, password)
                        else
                            Warning(
                                'Error',
                                'Invalid E-mail address or Password.'
                            )
                    }}
                />
            )}

            <View style={styles.footer}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text
                        style={[
                            styles.text,
                            { marginLeft: 5, color: tertiary },
                        ]}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
