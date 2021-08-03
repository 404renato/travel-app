import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular } = theme.fonts

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        marginHorizontal: 30,
    },

    text: {
        fontSize: 18,
        fontFamily: Regular,
    },
})
