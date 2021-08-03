import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { ProfileParamsList } from '../types'
import { EditProfile } from '../screens/EditProfile'
import { Profile } from '../screens/Profile'
import { Bookings } from '../screens/Bookings'
import { TermsOfService } from '../screens/TermsOfService'

const Stack = createStackNavigator<ProfileParamsList>()

export function ProfileStack() {
    const { Navigator, Screen } = Stack

    return (
        <Navigator>
            <Screen
                name="Profile"
                component={Profile}
                options={{ header: () => null }}
            />

            <Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                    title: 'Edit Profile',
                }}
            />

            <Screen name="Bookings" component={Bookings} />

            <Screen
                name="TermsOfService"
                component={TermsOfService}
                options={{
                    title: 'Terms of Service',
                }}
            />
        </Navigator>
    )
}
