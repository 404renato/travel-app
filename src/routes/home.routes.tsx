import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SeeAll } from '../screens/SeeAll'

import { HomeParamsList } from '../types'

const Stack = createStackNavigator<HomeParamsList>()

export function HomeStack() {
    const { Navigator, Screen } = Stack

    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{ header: () => null }}
            />

            <Screen
                name="SeeAll"
                component={SeeAll}
                options={{
                    title: 'All Locations',
                }}
            />
        </Navigator>
    )
}
