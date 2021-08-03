import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular } = theme.fonts

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },

    container: {
        marginHorizontal: 30,
        marginTop: 10,
    },

    text: {
        fontSize: 18,
        fontFamily: Regular,
    },
})
