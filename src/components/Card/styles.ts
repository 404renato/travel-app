import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const { primary, secondary } = theme.colors
const { Regular, Bold } = theme.fonts

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        height: 200,
    },

    content: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },

    title: {
        fontSize: 24,
        fontFamily: Bold,
        color: 'white',
    },

    subTitle: {
        fontSize: 18,
        fontFamily: Regular,
        color: 'white',
    },

    trending: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 0,

        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        height: 20,
        backgroundColor: primary,
        paddingHorizontal: 5,
    },

    trendingText: {
        fontSize: 14,
        fontFamily: Bold,
        color: 'white',
    },

    modal: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
    },
})
