import React from 'react'
import { View, Text, Image } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

interface HeaderProps {
    firstName: string
    avatar: string
}

export function Header({ firstName, avatar }: HeaderProps) {
    const { tertiary } = theme.colors

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.greetings, { color: tertiary }]}>
                    Hello,
                </Text>
                <Text style={styles.greetings}> {firstName}</Text>
            </View>

            <View style={styles.avatar}>
                {avatar === '' ? (
                    <Ionicons
                        name="person-circle-outline"
                        size={50}
                        color="black"
                    />
                ) : (
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                )}
            </View>
        </View>
    )
}
