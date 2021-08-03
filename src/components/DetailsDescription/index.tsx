import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { LocationProps } from '../../types'
import { useAuth } from '../../hooks/auth'
import { UpdateUser } from '../../functions'
import { styles } from './styles'

interface DetailsDescriptionProps {
    location: LocationProps
}

export function DetailsDescription({ location }: DetailsDescriptionProps) {
    const { user, setUser } = useAuth()

    const SetBooked = async (location: LocationProps) => {
        if (user.favorites.some(({ city }) => city === location.city)) {
            const index = user.favorites.findIndex((loc: LocationProps) => {
                return loc.city === location.city
            })
            user.favorites[index].booked = !user.favorites[index].booked
        }

        if (user.bookings.some(({ city }) => city === location.city)) {
            location.booked = !location.booked

            const removedLocation = user.bookings.findIndex(
                (loc: LocationProps) => {
                    return loc.city === location.city
                }
            )
            user.bookings.splice(removedLocation, 1)

            UpdateUser(user)
            setUser(user)
        } else {
            location.booked = !location.booked

            user.bookings.push(location)

            UpdateUser(user)

            setUser(user)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{location.description}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}> 15${'\t'}per day</Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => SetBooked(location)}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            {user.bookings.find((loc: LocationProps) => {
                                return loc.city === location.city
                            })?.booked
                                ? 'Cancel'
                                : 'Book Now'}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
