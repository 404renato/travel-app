import React, { useState, useRef, useEffect } from 'react'

import { View, Dimensions } from 'react-native'

import { DetailsImage } from '../../components/DetailsImage'
import { DetailsDescription } from '../../components/DetailsDescription'

import { LocationProps, UserProps } from '../../types'
import { styles } from './styles'
import firebase from 'firebase'
import { useAuth } from '../../hooks/auth'

interface DetailsProps {
    location: LocationProps
}

export function Details({ location }: DetailsProps) {
    return (
        <View style={styles.container}>
            <DetailsImage location={location} />
            <DetailsDescription location={location} />
        </View>
    )
}
