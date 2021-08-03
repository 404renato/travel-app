import React, { useState } from 'react'

import { View, FlatList } from 'react-native'

import { Card } from '../../components/Card'

import { locations } from '../../utils/locations'
import { styles } from './styles'
import { Search } from '../../components/Search'

export function SeeAll() {
    const [text, setText] = useState('')

    return (
        <>
            <View style={styles.background}>
                <View style={styles.container}>
                    <View style={{ height: 40, marginBottom: 10 }}>
                        <Search values={{ text, setText }} />
                    </View>

                    <FlatList
                        data={locations}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={{
                            paddingBottom: locations.length * 200,
                        }}
                        renderItem={({ item }) => {
                            if (text === '') return <Card location={item} />
                            else {
                                if (item.city.match(new RegExp(text, 'i')))
                                    return <Card location={item} />
                                else return null
                            }
                        }}
                    />
                </View>
            </View>
        </>
    )
}
