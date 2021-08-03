import React from 'react'
import { View, TextInput, TouchableWithoutFeedback } from 'react-native'

import { EvilIcons, MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'

interface SearchProps {
    values: { text: string; setText: (text: string) => void }
}

export function Search({ values }: SearchProps) {
    const { text, setText } = values

    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                onChangeText={setText}
                maxLength={30}
                placeholder="Search a location"
                placeholderTextColor="black"
                autoCorrect={false}
                style={styles.input}
            ></TextInput>

            <View style={styles.clear}>
                {text === '' ? (
                    <EvilIcons name="search" size={28} color="black" />
                ) : (
                    <TouchableWithoutFeedback onPress={() => setText('')}>
                        <MaterialIcons name="clear" size={24} color="black" />
                    </TouchableWithoutFeedback>
                )}
            </View>
        </View>
    )
}
