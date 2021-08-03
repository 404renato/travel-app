import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        width: '100%',
        height: 64,
        borderRadius: 16,
        backgroundColor: '#FAFAFA',
        marginBottom: 20,

        fontSize: 18,
        fontFamily: Regular,
        color: 'black',
    },

    eye: {
        alignSelf: 'flex-end',
        bottom: 65,
        marginRight: 10,
    },
})
