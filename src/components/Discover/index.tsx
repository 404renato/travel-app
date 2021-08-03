import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { View, FlatList } from 'react-native'
import { locations } from '../../utils/locations'
import { Card } from '../Card'
import { SectionHeader } from '../SectionHeader'

import { styles } from './styles'

const createArray = () => {
    let array: number[] = []
    while (array.length !== 3) {
        let random = Math.floor(Math.random() * locations.length)
        if (!array.includes(random)) array.push(random)
    }
    return array
}

let random = createArray()

export function Discover() {
    return (
        <View style={styles.container}>
            <SectionHeader title="Discover" />
            <FlatList
                data={locations}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={{ paddingBottom: 150 * 3 }}
                renderItem={({ index }) => {
                    if (index < 3)
                        return <Card location={locations[random[index]]} />
                    else return null
                }}
            />
        </View>
    )
}
