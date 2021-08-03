import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Bold } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        top: 70,
        marginHorizontal: 30,
    },

    text: {
        fontSize: 18,
        fontFamily: Bold,
        marginBottom: 25,
    },
})
