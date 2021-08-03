import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Favorites } from '../screens/Favorites'
import { Profile } from '../screens/Profile'
import { Trending } from '../screens/Trending'

import { AppParamsList } from '../types'
import { ProfileStack } from './profile.routes'
import { theme } from '../global/styles/theme'
import { HomeStack } from './home.routes'

const TabStack = createBottomTabNavigator<AppParamsList>()

export function AppRoutes() {
    const { Navigator, Screen } = TabStack

    const { primary } = theme.colors

    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'add'

                    if (route.name === 'Home')
                        iconName = focused ? 'home' : 'home-outline'
                    else if (route.name === 'Trending')
                        iconName = focused ? 'flame' : 'flame-outline'
                    else if (route.name === 'Favorites')
                        iconName = focused ? 'heart' : 'heart-outline'
                    else if (route.name === 'Profile')
                        iconName = focused
                            ? 'person-circle'
                            : 'person-circle-outline'

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    )
                },
            })}
            tabBarOptions={{
                activeTintColor: primary,
                inactiveTintColor: 'gray',
                showLabel: false,
            }}
            sceneContainerStyle={{ backgroundColor: 'white' }}
        >
            <Screen name="Home" component={HomeStack} />
            <Screen name="Trending" component={Trending} />
            <Screen name="Favorites" component={Favorites} />
            <Screen name="Profile" component={ProfileStack} />
        </Navigator>
    )
}
