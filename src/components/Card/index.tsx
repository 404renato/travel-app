import React, { useRef } from 'react'

import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

import { Modalize } from 'react-native-modalize'

import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { LocationProps } from '../../types'
import { useNavigation } from '@react-navigation/native'
import { Details } from '../../screens/Details'
import { Host, Portal } from 'react-native-portalize'

interface CardProps {
    location: LocationProps
}

export function Card({ location }: CardProps) {
    const modalizeRef = useRef<Modalize>(null)
    const { height } = Dimensions.get('screen')

    const onOpen = () => {
        modalizeRef.current?.open()
    }

    const onClose = () => {
        modalizeRef.current?.close()
    }

    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen()}>
                <ImageBackground
                    source={location.image1}
                    style={styles.container}
                    imageStyle={{ borderRadius: 32 }}
                >
                    <View style={styles.content}>
                        <Text style={styles.title}>{location.city}</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons name="location" size={24} color="white" />
                            <Text style={styles.subTitle}>
                                {location.country}
                            </Text>
                        </View>

                        {location.trending ? (
                            <View style={styles.trending}>
                                <Ionicons
                                    name="flame"
                                    size={16}
                                    color="white"
                                />
                                <Text style={styles.trendingText}>
                                    TRENDING
                                </Text>
                            </View>
                        ) : (
                            []
                        )}
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <Portal>
                <Modalize
                    ref={modalizeRef}
                    velocity={5000}
                    snapPoint={height * 0.9}
                    modalHeight={height * 0.9}
                    modalStyle={{
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                    }}
                    closeOnOverlayTap
                >
                    <Details location={location} />
                </Modalize>
            </Portal>
        </View>
    )
}
