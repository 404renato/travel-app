import React from 'react'
import { View, TextInput } from 'react-native'
import { useAuth } from '../../../hooks/auth'

import { styles } from './styles'

interface RowProps {
    values: { text: string; setText: (text: string) => void }
    placeholder: string
}

export function Row({ values, placeholder }: RowProps) {
    const { text, setText } = values
    const { user } = useAuth()
    return <View></View>
}
