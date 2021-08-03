import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { HomeParamsList } from '../../types'

import { styles } from './styles'

interface SectionHeaderProps {
    title: string
    subSection?: boolean
}

export function SectionHeader({
    title,

    subSection = false,
}: SectionHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={subSection ? styles.subSection : styles.title}>
                {title}
            </Text>
        </View>
    )
}
