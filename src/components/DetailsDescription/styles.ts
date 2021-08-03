import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { secondary } = theme.colors
const { Regular, Bold } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 30,
    },

    description: {
        fontSize: 18,
        fontFamily: Regular,
    },

    footer: {
        flexDirection: 'row',
        marginTop: 50,

        alignItems: 'center',
        justifyContent: 'space-between',
    },

    price: {
        fontSize: 24,
        fontFamily: Bold,
    },

    button: {
        width: 150,
        height: 50,
        borderRadius: 64,
        backgroundColor: secondary,

        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 24,
        fontFamily: Bold,
        color: 'white',
    },
})
