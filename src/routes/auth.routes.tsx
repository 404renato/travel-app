import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

import { AuthParamsList } from '../types'

const Stack = createStackNavigator<AuthParamsList>()

export function AuthRoutes() {
    const { Navigator, Screen } = Stack

    return (
        <Navigator headerMode="none">
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
        </Navigator>
    )
}
