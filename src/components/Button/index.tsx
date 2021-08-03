import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'

import { styles } from './styles'

type ButtonProps = TouchableOpacityProps & {
    title: string
    width: string | number
    height: string | number
}

export function Button({ title, width, height, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} {...rest}>
            <View style={[styles.container, { width, height }]}>
                <Text style={styles.submit}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
