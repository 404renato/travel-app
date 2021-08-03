import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { Regular } = theme.fonts
const { secondary } = theme.colors

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },

    container: {
        marginHorizontal: 30,
    },

    text: {
        position: 'absolute',
        top: 115,
        fontSize: 14,
        fontFamily: Regular,
        color: '#CBCBCB',
    },

    seeAll: {
        position: 'absolute',
        top: 120,
        right: 0,

        fontSize: 18,
        fontFamily: Regular,
        color: secondary,
    },
})
