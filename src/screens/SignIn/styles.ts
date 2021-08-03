import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    image: {
        width: '100%',
        height: '40%',
    },

    content: {
        marginHorizontal: 30,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },

    text: {
        fontSize: 18,
        fontFamily: Regular,
    },
})
