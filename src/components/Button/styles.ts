import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Bold } = theme.fonts
const { secondary } = theme.colors

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',

        borderRadius: 16,
        backgroundColor: secondary,
    },

    submit: {
        fontSize: 36,
        fontFamily: Bold,
        color: 'white',
    },
})
