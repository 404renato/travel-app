import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native'
import { color } from 'react-native-reanimated'
import { styles } from './styles'

type OptionProps = TouchableOpacityProps & {
    name: string
    disabled?: boolean
    bold?: boolean
}

export function Option({
    name,
    disabled = false,
    bold = false,
    ...rest
}: OptionProps) {
    const color = name === 'Cancel' ? 'red' : disabled ? '#DFDFDF' : 'black'
    const style = bold
        ? [
              styles.bold,
              {
                  color: color,
              },
          ]
        : [
              styles.regular,
              {
                  color: color,
              },
          ]

    return (
        <>
            <TouchableOpacity {...rest} disabled={disabled}>
                <Text style={style}>{name}</Text>
            </TouchableOpacity>
            {bold && name !== 'Cancel' ? <View style={styles.divider} /> : []}
        </>
    )
}
