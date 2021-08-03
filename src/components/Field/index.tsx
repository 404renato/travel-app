import React, { useState } from 'react'
import {
    View,
    TextInput,
    TextInputProps,
    TouchableWithoutFeedback,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

type FieldProps = TextInputProps & {
    values: { text: string; setText: (text: string) => void }
    placeholder: string

    isPassword?: boolean
}

export function Field({
    values,
    placeholder,

    isPassword = false,
    ...rest
}: FieldProps) {
    const { text, setText } = values
    const [hidePassword, setHidePassword] = useState(true)

    return (
        <>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder={placeholder}
                placeholderTextColor="#CBCBCB"
                secureTextEntry={isPassword ? hidePassword : false}
                style={styles.container}
                {...rest}
            ></TextInput>

            {isPassword ? (
                hidePassword ? (
                    <View style={styles.eye}>
                        <TouchableWithoutFeedback
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Ionicons name="eye" size={24} color="black" />
                        </TouchableWithoutFeedback>
                    </View>
                ) : (
                    <View style={styles.eye}>
                        <TouchableWithoutFeedback
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Ionicons name="eye-off" size={24} color="black" />
                        </TouchableWithoutFeedback>
                    </View>
                )
            ) : (
                []
            )}
        </>
    )
}
