import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { Card } from '../../components/Card'
import { useAuth } from '../../hooks/auth'
import { styles } from './styles'

export function Bookings() {
    const { user } = useAuth()

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                {user.bookings.length === 0 ? (
                    <Text style={styles.text}>No Bookings</Text>
                ) : (
                    <FlatList
                        data={user.bookings}
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
        </View>
    )
}
