import React from 'react'
import { View, Text } from 'react-native'
import zxcvbn from 'zxcvbn'
import { theme } from '../../global/styles/theme'

import { styles } from './styles'

interface PasswordStrengthMeterProps {
    password: string
}

export function PasswordStrengthMeter({
    password,
}: PasswordStrengthMeterProps) {
    let score = (zxcvbn(password).score * 100) / 4
    if (score === 0) score = 25

    const { Bold } = theme.fonts

    const progressColor = (score: number) => {
        if (password.length < 8) return '#DFDFDF'
        else if (score < 50) return 'red'
        else if (score < 75) return 'yellow'
        else if (score < 100) return 'green'
        else if (score === 100) return 'blue'
    }

    const strengthCheck = (score: number) => ({
        width: `${score}%`,
        height: 10,
        borderRadius: 16,
        backgroundColor: progressColor(score),
    })

    const progressText = (score: number) => {
        if (password.length < 8) return 'Too Short'
        else if (score < 50) return 'Weak'
        else if (score < 75) return 'Fair'
        else if (score < 100) return 'Good'
        else if (score === 100) return 'Strong'
    }

    const progressTextStyle = (score: number) => ({
        color: progressColor(score),
        fontSize: 18,
        fontFamily: Bold,
    })

    return (
        <View style={styles.container}>
            <View style={strengthCheck(score)} />
            <View style={{ position: 'absolute', top: 13, right: 0 }}>
                <Text style={progressTextStyle(score)}>
                    {progressText(score)}
                </Text>
            </View>
        </View>
    )
}
