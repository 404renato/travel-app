import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Bold } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        top: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    greetings: {
        fontSize: 36,
        fontFamily: Bold,
        color: 'black',
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
