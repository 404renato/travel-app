import React from 'react'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import { Oxygen_400Regular, Oxygen_700Bold } from '@expo-google-fonts/oxygen'

import { Routes } from './src/routes'
import { AuthProvider } from './src/hooks/auth'

// TODO Edit Profile Screen

export default function App() {
    let [fontsloaded] = useFonts({
        Oxygen_400Regular,
        Oxygen_700Bold,
    })

    if (!fontsloaded) return <AppLoading />

    return (
        <>
            <AuthProvider>
                <Routes />
            </AuthProvider>
            <StatusBar style="auto" />
        </>
    )
}
