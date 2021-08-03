import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Discover } from '../../components/Discover'
import { Header } from '../../components/Header'

import { useAuth } from '../../hooks/auth'
import { HomeParamsList } from '../../types'
import { styles } from './styles'

interface HomeProps {
    navigation: StackNavigationProp<HomeParamsList, 'Home'>
}

export function Home({ navigation }: HomeProps) {
    const { user } = useAuth()

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Header firstName={user.firstName} avatar={user.avatar} />

                <Text style={styles.text}>
                    What a cool day to discover new locations, huh?
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Discover />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SeeAll')}
                    >
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
