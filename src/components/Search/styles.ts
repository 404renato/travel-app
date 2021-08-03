import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingLeft: 20,
        backgroundColor: '#FAFAFA',
        borderRadius: 16,
        flexDirection: 'row',
        marginTop: 2,
    },

    input: {
        fontSize: 16,
        fontFamily: Regular,
        color: 'black',
    },

    clear: {
        position: 'absolute',
        right: 10,
        alignSelf: 'center',
    },
})
