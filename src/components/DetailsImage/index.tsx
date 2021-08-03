import React from 'react'

import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { LocationProps } from '../../types'
import { useAuth } from '../../hooks/auth'
import { UpdateUser } from '../../functions'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

interface DetailsImageProps {
    location: LocationProps
}

export function DetailsImage({ location }: DetailsImageProps) {
    const { user, setUser } = useAuth()
    const { primary } = theme.colors

    const SetFavorited = async (location: LocationProps) => {
        if (user.bookings.some(({ city }) => city === location.city)) {
            const index = user.bookings.findIndex((loc: LocationProps) => {
                return loc.city === location.city
            })
            user.bookings[index].favorited = !user.bookings[index].favorited
        }

        if (user.favorites.some(({ city }) => city === location.city)) {
            location.favorited = !location.favorited

            const removedLocation = user.favorites.findIndex(
                (loc: LocationProps) => {
                    return loc.city === location.city
                }
            )
            user.favorites.splice(removedLocation, 1)

            UpdateUser(user)

            setUser(user)
        } else {
            location.favorited = !location.favorited
            user.favorites.push(location)

            UpdateUser(user)
            setUser(user)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={location.image1}
                style={styles.image}
                imageStyle={{
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 32,
                }}
                resizeMethod="scale"
            >
                <View style={styles.content}>
                    <View style={styles.top}>
                        <View>
                            <Text style={styles.title}>{location.city}</Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Ionicons
                                    name="location"
                                    size={24}
                                    color="white"
                                />
                                <Text style={styles.subTitle}>
                                    {location.country}
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => SetFavorited(location)}
                            activeOpacity={0.7}
                        >
                            <View style={styles.circle}>
                                {user.favorites.find((loc: LocationProps) => {
                                    return loc.city === location.city
                                })?.favorited ? (
                                    <Ionicons
                                        name="heart"
                                        size={28}
                                        color={primary}
                                    />
                                ) : (
                                    <Ionicons
                                        name="heart-outline"
                                        size={28}
                                        color="gray"
                                    />
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>

                    {location.trending ? (
                        <View style={styles.trending}>
                            <Ionicons name="flame" size={16} color="white" />
                            <Text style={styles.trendingText}>TRENDING</Text>
                        </View>
                    ) : (
                        []
                    )}
                </View>
            </ImageBackground>
        </View>
    )
}
