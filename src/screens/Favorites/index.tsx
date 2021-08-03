import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'

import { Card } from '../../components/Card'
import { SectionHeader } from '../../components/SectionHeader'
import { useAuth } from '../../hooks/auth'
import { styles } from './styles'

export function Favorites() {
    const { user } = useAuth()

    const { height } = Dimensions.get('screen')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                See the locations that you{'\n'}marked as favorite.
            </Text>
            <SectionHeader title="Favorites" />
            {user.favorites.length === 0 ? (
                <View style={[styles.textContainer, { height }]}>
                    <Text style={styles.text}>No Favorites</Text>
                </View>
            ) : (
                <FlatList
                    data={user.favorites}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={{
                        paddingBottom: user.bookings.length * 200,
                    }}
                    renderItem={({ item }) => <Card location={item} />}
                />
            )}
        </View>
    )
}
