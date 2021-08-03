import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular, Bold } = theme.fonts
const { primary } = theme.colors

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },

    container: {
        top: 60,
        alignItems: 'center',
    },

    header: {
        fontSize: 48,
        fontFamily: Bold,
        marginBottom: 60,
    },

    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    username: {
        fontSize: 24,
        fontFamily: Bold,
        marginBottom: 50,
        textTransform: 'capitalize',
    },

    content: {
        alignItems: 'center',
    },

    options: {
        fontSize: 18,
        fontFamily: Regular,
        marginBottom: 30,
    },

    button: {
        width: 200,
        height: 60,
        borderRadius: 32,
        backgroundColor: primary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 24,
        fontFamily: Regular,
        color: 'white',
    },

    changePhoto: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,

        top: 200,
        width: '80%',
        height: '30%',
        borderRadius: 32,
        backgroundColor: '#FAFAFA',
    },
})
