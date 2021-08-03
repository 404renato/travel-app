import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular, Bold } = theme.fonts
const { primary, secondary, tertiary, quaternary } = theme.colors

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 48,
        fontFamily: Bold,
        color: 'black',
    },

    subSection: {
        fontSize: 24,
        fontFamily: Bold,
        color: 'black',
    },

    seeAll: {
        fontSize: 18,
        fontFamily: Regular,
        color: secondary,
        alignSelf: 'flex-end',
        marginBottom: 8,
    },
})
