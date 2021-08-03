import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular, Bold } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        top: 70,
        marginHorizontal: 30,
    },

    title: {
        fontSize: 18,
        fontFamily: Bold,
        marginBottom: 25,
    },

    textContainer: {
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 18,
        fontFamily: Regular,
    },
})
