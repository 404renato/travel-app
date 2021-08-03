import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card } from '../../components/Card'
import { SectionHeader } from '../../components/SectionHeader'
import { locations } from '../../utils/locations'

import { styles } from './styles'

export function Trending() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                See what’s trending between
                {'\n'}the users.
            </Text>
            <SectionHeader title="Trending" />
            <FlatList
                data={locations}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={{ paddingBottom: 150 * 3 }}
                renderItem={({ item }) => {
                    if (item.trending) return <Card location={item} />
                    else return null
                }}
            />
        </View>
    )
}
